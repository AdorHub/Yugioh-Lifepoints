<?php

session_start();

require_once __DIR__ . '/../functions.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['csrf_token'] === $_SESSION['csrf_token']) {

    //get user data
    $user_login = clearSpaces($_POST['user_login'] ?? null);
    $user_password = clearSpaces($_POST['user_password'] ?? null);

    //validation
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
    if (empty($user_password)) {
        addValidationError('user_password', 'Password is empty!');
    }

    if (!empty($_SESSION['validation'])) {
        saveOldValue('user_login', $user_login);
        redirect('../../pages/login.php');
    }

    //if pass all basic validation check for user
    $user = checkUser($user_login);

    if (!$user || !password_verify($user_password, $user['user_password'])) {
        addValidationError('user_password', 'Wrong login or password!');
        saveOldValue('user_login', $user_login);
        redirect('../../pages/login.php');
    }

    session_regenerate_id(true);
    $_SESSION['user']['id'] = $user['id'];
    redirect('../../pages/profile.php');
}

die();

?>