<?php

require_once __DIR__ . '/../functions.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && $_POST['csrf_token'] === $_SESSION['csrf_token']) {
    logout();
}

?>