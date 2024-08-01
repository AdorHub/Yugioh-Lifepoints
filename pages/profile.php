<?php

require_once __DIR__ . '/../src/functions.php';

checkIsAuth();

$user = getUser();

$csrfToken = bin2hex(random_bytes(32));
$_SESSION['csrf_token'] = $csrfToken;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href="../assets/styles/profile.css">
    <script src="https://unpkg.com/ionicons@4.1.2/dist/ionicons.js"></script>
</head>
<body>
    <nav>
        <input type="checkbox" id="check">
        <label for="check" class="check-btn">
            <ion-icon name="menu"></ion-icon>
        </label>
        <label class="logo">Yugioh!</label>
        <ul>
            <li><a href="index.php">Duel!</a></li>
            <li><a href="profile.php" class="active">Profile</a></li>
            <li><a href="about.php">About</a></li>
        </ul>
    </nav>

    <div class="duelist-background">
        <div class="duelist-container">
            <img src="<?= "../" . $user['profile_img'] ?>" alt="<?= htmlspecialchars($user['user_login']) ?>" class="duelist-img">
            <p class="duelist-name"><?= htmlspecialchars($user['user_login']) ?></p>
            <div class="win-lose-container">
                <div class="win">
                    <p>Wins:</p><span class="wins"></span>
                </div>
                <div class="lose">
                    <p>Losses:</p><span class="losses"></span>
                </div>
            </div>
            <button type="button" class="reset-btn">Reset statistics</button>
            <form action="../src/actions/logout.php" method="post">
            <input value="<?= $csrfToken ?>" name="csrf_token" hidden>
            <button type="submit" class="logout-btn">Logout</button>
            </form>
        </div>
    </div>

    <script src="../assets/scripts/profile.js" defer></script>
</body>
</html>