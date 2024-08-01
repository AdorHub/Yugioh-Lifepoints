<?php

require_once __DIR__ . '/../src/functions.php';

checkIsAuth();

$user = getUser();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lifepoints</title>
    <link rel="stylesheet" href="../assets/styles/duel.css">
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
            <li><a href="#" class=" active">Duel!</a></li>
            <li><a href="profile.php">Profile</a></li>
            <li><a href="about.php">About</a></li>            
        </ul>
    </nav>
    <div class="start-menu-background " id="start-menu-background">
        <div class="start-menu">
            <h1>Duel Lifepoints</h1>
            <button id="btn8">Start with 8000</button>
            <button id="btn4">Start with 4000</button>
        </div>
    </div>

    <div class="duel-panel-container closed" id="duel-panel-container">
        <div class="duel-panel-user" id="duel-panel-user1">
            <div class="profile-img">
                <img src="<?= "../" . $user['profile_img'] ?>" alt="<?= $user['user_login'] ?>">
            </div>
            
            <div class="user-hp">
                <span id="hp1"></span>
            </div>
            <div class="buttons-container">
                <div class="count-buttons">
                    <div>
                        <button type="button" onclick="prepareNumber('+1000', 1)">+1000</button>
                        <button type="button" onclick="prepareNumber('+100', 1)">+100</button>
                        <button type="button" onclick="prepareNumber('+10', 1)">+10</button>
                        <button type="button" onclick="prepareNumber('+1', 1)">+1</button>
                    </div>
                    <div>
                        <button type="button" onclick="prepareNumber('-1000', 1)">-1000</button>
                        <button type="button" onclick="prepareNumber('-100', 1)">-100</button>
                        <button type="button" onclick="prepareNumber('-10', 1)">-10</button>
                        <button type="button" onclick="prepareNumber('-1', 1)">-1</button>
                    </div>
                </div>
                <div class="action-buttons">
                    <p id="current-count1"></p>
                    <div>
                        <button id="apply-btn1" class="apply-btn" onclick="calculate(1)">Apply</button>
                        <button id="reset-btn1" class="reset-btn" onclick="reset(1)">Reset</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="duel-panel-user" id="duel-panel-user2">
            <div class="profile-img">
                <img src="../assets/images/vagabond.jpg" alt="The Vagabond">
            </div>

            <div class="user-hp">
                <span id="hp2"></span>
            </div>
            <div class="buttons-container">
                <div class="count-buttons">
                    <div>
                        <button onclick="prepareNumber('+1000', 2)">+1000</button>
                        <button onclick="prepareNumber('+100', 2)">+100</button>
                        <button onclick="prepareNumber('+10', 2)">+10</button>
                        <button onclick="prepareNumber('+1', 2)">+1</button>
                    </div>
                    <div>
                        <button onclick="prepareNumber('-1000', 2)">-1000</button>
                        <button onclick="prepareNumber('-100', 2)">-100</button>
                        <button onclick="prepareNumber('-10', 2)">-10</button>
                        <button onclick="prepareNumber('-1', 2)">-1</button>
                    </div>
                </div>
                <div class="action-buttons">
                    <p id="current-count2"></p>
                    <div>
                        <button id="apply-btn2" class="apply-btn" onclick="calculate(2)">Apply</button>
                        <button id="reset-btn2" class="reset-btn" onclick="reset(2)">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="extra-actions-background">
        <div class="extra-actions-container closed" id="extra-actions">
            <div class="extra-actions">
                <div class="toss-a-coin-container">
                    <div class="coin">
                        <span class="coin-text">Heads</span>
                    </div>
                    <button type="button" class="toss-btn">Toss a coin!</button>
                </div>
                <div>
                    <div class="dice-a-roll-container">
                        <!-- here will be create div .dice and .dice-dot inside -->
                    </div>
                    <div>
                        <button type="button" class="dice-btn">Roll a dice!</button>
                    </div>
                </div>                
            </div>
            <div>
                <button class="restart-btn">Restart duel</button>
            </div> 
        </div>               
    </div>

    <div class="music-player-background">
        <div class="music-player-container closed">
            <div class="music-player-title">Music title</div>
            <div class="music-player">
                <audio src=""></audio>
                <div class="buttons">
                    <div class="prev icons">
                        <ion-icon name="skip-backward"></ion-icon>
                    </div>
                    <div class="play-pause icons">
                        <ion-icon name="play"></ion-icon>
                    </div>
                    <div class="next icons">
                        <ion-icon name="skip-forward"></ion-icon>
                    </div>
                </div>
                <div class="volume-container">
                    <input type="range" class="vol" value="0">
                    <span class="num">0</span>
                </div>
            </div>
        </div>
    </div>

    <script src="../assets/scripts/script.js" defer></script>
</body>
</html>