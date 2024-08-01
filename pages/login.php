<?php

require_once __DIR__ . '/../src/functions.php';

checkIsGuest();

$csrfToken = bin2hex(random_bytes(32));
$_SESSION['csrf_token'] = $csrfToken;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../assets/styles/auth.css">
    <script src="https://unpkg.com/ionicons@4.1.2/dist/ionicons.js"></script>
</head>
<body>
    <img src="../assets/images/hole-circle.png" alt="circle-img" class="circle-1">
    <img src="../assets/images/hole-circle.png" alt="circle-img" class="circle-2">
    <div class="auth-background">
        <div class="auth-form">
            <form action="/src/actions/login.php" method="post" enctype="multipart/form-data">
                <h2>Sign in</h2>
                <div class="input-box">
                    <label for="login">Login</label>
                    <input type="text" id="login" value="<?=getOldValue('user_login')?>" name="user_login" required>
                    <div class="error-msg">
                    <?php if (hasValidationError('user_login')): ?>
                            <?=getValidationError('user_login')?>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="input-box">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="user_password" required>
                    <div class="error-msg">
                        <?php if (hasValidationError('user_password')): ?>
                            <?=getValidationError('user_password')?>
                        <?php endif; ?>
                    </div>
                </div>
                <input value="<?= $csrfToken ?>" name="csrf_token" hidden>
                <button type="submit" class="submit-btn">Sign in</button>
                <p class="account-text">I don't have an account yet, <a href="register.php">register!</a></p>
            </form>
        </div>
    </div>
</body>
</html>