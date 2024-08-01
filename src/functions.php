<?php

session_start();

require_once __DIR__ . '/config.php';

ini_set('display_errors', 0);

function check ($data)
{
    echo '<pre>';
    print_r($data);
    echo '</pre>';
    die();
}

function redirect ($path, $dieText = '')
{
    header("Location: $path");
    die($dieText);
}

function clearSpaces ($data)
{
    $data = trim($data);
    $data = str_replace(' ', '', $data);
    return $data;
}

function addValidationError ($field, $text)
{
    $_SESSION['validation'][$field] = $text;
}

function hasValidationError ($field)
{
    return isset($_SESSION['validation'][$field]);
}

function getValidationError ($field)
{
    $message = $_SESSION['validation'][$field] ?? '';
    unset($_SESSION['validation'][$field]);
    return $message;
}

function getPdo (): PDO
{
    try {
        return new Pdo(DSN, USERNAME, PASSWORD);
    } catch (PDOException $e) {
        die($e->getMessage());
    }
}

function saveOldValue ($key, $value)
{
    $_SESSION['old'][$key] = $value;
}

function getOldValue ($key)
{
    $value = $_SESSION['old'][$key] ?? '';
    unset($_SESSION['old'][$key]);
    return $value;
}

function uploadImage ($file)
{
    $uploadPath = __DIR__ . '/../uploads';
    if (!is_dir($uploadPath)) {
        mkdir($uploadPath, 0777, true);
    }
    $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
    $part1 = (string) mt_rand(100, 999);
    $part2 = (string) time();
    $fileName = $part1 . '_' . $part2 . ".$ext";
    if (!move_uploaded_file($file['tmp_name'], "$uploadPath/$fileName")) {
        redirect('../pages/register.php', 'Failed to upload image!');
    }
    return "uploads/$fileName";
}

function checkUser ($user_login)
{
    $pdo = getPdo();
    $sql = "SELECT * FROM duelists WHERE user_login = :user_login;";
    $stmt = $pdo->prepare($sql);
    try {
        $stmt->execute([
            'user_login' => $user_login
        ]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die($e->getMessage());
    }
}

function checkIsGuest ()
{
    if (isset($_SESSION['user']['id'])) {
        redirect('profile.php');
    }
}

function checkIsAuth ()
{
    if (!isset($_SESSION['user']['id'])) {
        redirect('register.php');
    }
}

function logout ()
{
    unset($_SESSION['user']['id']);
    redirect('../../pages/login.php');
}

function getUser ()
{
    if (!isset($_SESSION['user'])) {
        return false;
    }
    $id = $_SESSION['user']['id'];
    $pdo = getPdo();
    $sql = "SELECT * FROM duelists WHERE id = ?;";
    $stmt = $pdo->prepare($sql);
    try {
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);

    } catch (PDOException $e) {
        die($e->getMessage());
    }
}

?>