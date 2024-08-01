<?php

session_start();

require_once __DIR__ . '/../functions.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['csrf_token'] === $_SESSION['csrf_token']) {

    //get user data
    $user_login = clearSpaces($_POST['user_login'] ?? null);
    $profile_img = $_FILES['profile_img'] ?? null;
    $user_password = clearSpaces($_POST['user_password'] ?? null);
    $password_confirmation = clearSpaces($_POST['password_confirmation'] ?? null);

    //validation
    if (!preg_match('/^[a-z]+/i', $user_login)) {
        addValidationError('user_login', 'Name must contain only letters!');
    }
    if (strlen($user_login) < 4) {
        addValidationError('user_login', 'Name must be at least 4 characters!');
    }
    if (strlen($user_login) > 32) {
        addValidationError('user_login', 'Name must be less or equal to 32!');
    }
    if (empty($user_login)) {
        addValidationError('user_login', 'Name is empty!');
    }

    
    if (strlen($user_password) < 6) {
        addValidationError('user_password', 'Password must be at least 6 characters!');
    }
    if (strlen($user_password) > 32) {
        addValidationError('user_password', 'Password must be less or equal to 32!');
    }
    if ($user_password !== $password_confirmation) {
        addValidationError('user_password', 'Password mismatch!');
    }
    if (empty($user_password)) {
        addValidationError('user_password', 'Password is empty!');
    }

    $types = ['image/jpeg', 'image/png'];      
    if (!in_array($profile_img['type'], $types)) {
        addValidationError('profile_img', 'Wrong type of file!');
    }
    if ($profile_img['size'] / 1000000 > 5) {
        addValidationError('profile_img', 'Image too big, max size is 5mb!');
    }  
    if (empty($profile_img['name'])) {
        addValidationError('profile_img', 'Please select your profile picture!');
    }

    $loginPdo = getPdo();
    $sql = "SELECT * FROM duelists WHERE user_login = :user_login;";
    $stmt = $loginPdo->prepare($sql);
    try {
        $stmt->execute([
            'user_login' => $user_login
        ]);
        $isLoginExist = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($isLoginExist['user_login'] === $user_login) {
            addValidationError('user_login', 'This name is alredy taken!');
        }
    } catch (PDOException $e) {
        redirect('../../pages/register.php');
    }
    
    //if any validation error
    if (!empty($_SESSION['validation'])) {
        saveOldValue('user_login', $user_login);
        redirect('../../pages/register.php');
    }

    $profile_img_path = uploadImage($profile_img);
    //register user'a
    $pdo = getPdo();
    $sql = "INSERT INTO duelists (user_login, user_password, profile_img) VALUES (:user_login, :user_password, :profile_img);";
    $stmt = $pdo->prepare($sql);
    $options = ['cost' => 12];
    try {
        $stmt->execute([
            'user_login' => $user_login,
            'user_password' => password_hash($user_password, PASSWORD_BCRYPT, $options),
            'profile_img' => $profile_img_path ?? '',
        ]);
    } catch (PDOException $e) {
        redirect('../../pages/register.php', $e->getMessage());
    }
    
    redirect('../../pages/login.php');
}

die('dumbass');

?>