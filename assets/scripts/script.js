// Restart when page is reload
window.onload = function () {
    restart();
};

// Start menu
const closeBtn8 = document.getElementById('btn8');
const closeBtn4 = document.getElementById('btn4');
const startMenuBackground = document.getElementById('start-menu-background');
const duelPanelContainer = document.getElementById('duel-panel-container');
const extraActions = document.getElementById('extra-actions');
const user1hp = document.getElementById('hp1');
const user2hp = document.getElementById('hp2');
const musicPlayer = document.querySelector('.music-player-container');
const header = document.querySelector('nav');

closeBtn8.addEventListener('click', () => {
    startMenuBackground.classList.add('closed');
    header.classList.remove('closed');
    duelPanelContainer.classList.remove('closed');
    extraActions.classList.remove('closed');
    musicPlayer.classList.remove('closed');
    let hp = 8000;
    user1hp.textContent = hp;
    user2hp.textContent = hp;
});

closeBtn4.addEventListener('click', () => {
    startMenuBackground.classList.add('closed');
    header.classList.remove('closed');
    duelPanelContainer.classList.remove('closed');
    extraActions.classList.remove('closed');
    musicPlayer.classList.remove('closed');
    let hp = 4000;
    user1hp.textContent = hp;
    user1hp.value = hp;
    user2hp.textContent = hp;
    user2hp.value = hp;
});

// Dice a roll
function createDice (number) 
{
    const dotPositionMatrix = {
        1: [
            [50, 50]
        ],
        2: [
            [20, 20],
            [80, 80],
        ],
        3: [
            [20, 20],
            [50, 50],
            [80, 80]
        ],
        4: [
            [20, 20],
            [20, 80],
            [80, 20],
            [80, 80]
        ],
        5: [
            [20, 20],
            [20, 80],
            [50, 50],
            [80, 20],
            [80, 80]
        ],
        6: [
            [20, 20],
            [20, 80],
            [50, 20],
            [50, 80],
            [80, 20],
            [80, 80]
        ]
    };

    const dice = document.createElement('div');

    dice.classList.add('dice');

    for (const dotPosition of dotPositionMatrix[number]) {
        const dot = document.createElement('div');
        dot.classList.add('dice-dot');
        dot.style.setProperty('--top', dotPosition[0] + '%');
        dot.style.setProperty('--left', dotPosition[1] + '%');
        dice.appendChild(dot);
    }

    return dice;
}

function randomizeDice () 
{
    diceContainer.innerHTML = '';
    const random = Math.floor((Math.random() * 6) + 1);
    const dice = createDice(random);
    diceContainer.prepend(dice);
}

const diceContainer = document.querySelector('.dice-a-roll-container');
const diceBtn = document.querySelector('.dice-btn');
randomizeDice();

diceBtn.addEventListener('click', () => {
    const interval = setInterval (() => {
        randomizeDice();
    }, 100);

    setTimeout(() => clearInterval(interval), 1000);
});

// Toss a coin
function tossACoin () 
{
    const random = Math.floor(Math.random() * 2);
    const coinText = document.querySelector('.coin-text');

    if (random === 1) {
        coinText.textContent = 'Heads';
    } else {
        coinText.textContent = 'Tails';
    }
}

const tossBtn = document.querySelector('.toss-btn');
tossBtn.addEventListener('click', () => {
    const interval = setInterval(() => {
        tossACoin();
    }, 100);

    setTimeout(() => clearInterval(interval), 1000);
});

// Restart
const restartBtn = document.querySelector('.restart-btn');

restartBtn.addEventListener('click', () => {
    restart(3);
});

// Music Player
const songsList = [
    {
        path: '/assets/music/Akiza.mp3',
        songName: 'Akiza',
    },
    {
        path: '/assets/music/Alito.mp3',
        songName: 'Alito',
    },
    {
        path: '/assets/music/Anna-Kaboom.mp3',
        songName: 'Anna Kaboom',
    },
    {
        path: '/assets/music/Celina.mp3',
        songName: 'Celina',
    },
    {
        path: '/assets/music/Chazz.mp3',
        songName: 'Chazz',
    },
    {
        path: '/assets/music/Crow-Hogan.mp3',
        songName: 'Crow Hogan',
    },
    {
        path: '/assets/music/Jack-Atlas.mp3',
        songName: 'Jack Atlas',
    },
    {
        path: '/assets/music/Joey-Wheeler.mp3',
        songName: 'Joey Wheeler',
    },
    {
        path: '/assets/music/Kaito.mp3',
        songName: 'Kaito',
    },
    {
        path: '/assets/music/Kalin-Kessler.mp3',
        songName: 'Kalin Kessler',
    },
    {
        path: '/assets/music/Mako-Tsunami.mp3',
        songName: 'Mako Tsunami',
    },
    {
        path: '/assets/music/Normal-Duel.mp3',
        songName: 'Normal Duel',
    },
    {
        path: '/assets/music/Playmaker.mp3',
        songName: 'Playmaker',
    },
    {
        path: '/assets/music/Quattro.mp3',
        songName: 'Quattro',
    },
    {
        path: '/assets/music/Seto-Kaiba.mp3',
        songName: 'Seto Kaiba',
    },
    {
        path: '/assets/music/Sherry-LeBlanc.mp3',
        songName: 'Sherry LeBlanc',
    },
    {
        path: '/assets/music/Soulburner.mp3',
        songName: 'Soulburner',
    },
    {
        path: '/assets/music/Supreme-King.mp3',
        songName: 'Supreme King',
    },
    {
        path: '/assets/music/Tea-Gardner.mp3',
        songName: 'Tea Gardner',
    },
    {
        path: '/assets/music/Tetsu-Trudge .mp3',
        songName: 'Tetsu Trudge ',
    },
    {
        path: '/assets/music/Turbo-Duel.mp3',
        songName: 'Turbo Duel',
    },
    {
        path: '/assets/music/Yami-Yugi.mp3',
        songName: 'Yami Yugi',
    },
    {
        path: '/assets/music/Yugi-Muto.mp3',
        songName: 'Yugi Muto',
    },
    {
        path: '/assets/music/Yugo.mp3',
        songName: 'Yugo',
    },
    {
        path: '/assets/music/Yusei.mp3',
        songName: 'Yusei',
    },
    {
        path: '/assets/music/Zuzu.mp3',
        songName: 'Zuzu',
    }
];
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const playPause = document.querySelector('.play-pause');
const audio = document.querySelector('audio');
const title = document.querySelector('.music-player-title');
let songs = false;
let i = 1;
let randomSong = Math.floor(Math.random() * (songsList.length + 1));
playPause.addEventListener('click', () => (songs ? pauseSong() : playSong()));
prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);

loadSong(songsList[randomSong]);

audio.addEventListener('ended', nextSong);

function playSong ()
{
    songs = true;
    audio.volume = vol.value / 100;
    audio.autoplay;
    audio.play();
    playPause.innerHTML = '<ion-icon name="pause"></ion-icon>';
}

function pauseSong ()
{
    songs = false;
    audio.pause();
    playPause.innerHTML = '<ion-icon name="play"></ion-icon>';
}

function loadSong (songsList)
{
    title.textContent = songsList.songName;
    audio.src = songsList.path;
}

function prevSong ()
{
    i--;
    if (i < 0) {
        i = songsList.length - 1;
    }
    loadSong(songsList[i]);
    playSong();
}

function nextSong ()
{
    i++;
    if (i > songsList.length - 1) {
        i = 0;
    }
    loadSong(songsList[i]);
    playSong();
}

// Volume

let vol = document.querySelector('.vol');
let num = document.querySelector('.num');

vol.oninput = function () {
    audio.volume = vol.value / 100;
    num.innerHTML = vol.value;
}

// Cookie

function getCookie (name)
{
    const cookieDecoded = decodeURIComponent(document.cookie);
    const cookieArray = cookieDecoded.split('; ');
    let result = null;

    cookieArray.forEach(element => {
        if (element.indexOf(name) == 0) {
            result = element.substring(name.length + 1);
        }
    });

    return result;
}

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Calculating
let currentCount1 = document.getElementById('current-count1');
let currentCount2 = document.getElementById('current-count2');

const applyBtn1 = document.getElementById('apply-btn1');
const resetBtn1 = document.getElementById('reset-btn1');
const applyBtn2 = document.getElementById('apply-btn2');
const resetBtn2 = document.getElementById('reset-btn2');

const duelPanelUser1 = document.getElementById('duel-panel-user1');
const duelPanelUser2 = document.getElementById('duel-panel-user2');

reset(3);

function prepareNumber (input, playerNumber)
{
    if (playerNumber == 1) {
        try {
            currentCount1.value = eval(currentCount1.value += input);

            if (Math.sign(currentCount1.value) >= 0) {
                currentCount1.textContent = `+${currentCount1.value}`;
            } else {
                currentCount1.textContent = currentCount1.value;
            }
        } catch (error) {
            console.log('Error');
        }
    }

    if (playerNumber == 2) {
        try {
            currentCount2.value = eval(currentCount2.value += input);

            if (Math.sign(currentCount2.value) >= 0) {
                currentCount2.textContent = `+${currentCount2.value}`;
            } else {
                currentCount2.textContent = currentCount2.value;
            }
        } catch (error) {
            console.log('Error');
        }
    }
}

function calculate (playerNumber)
{
    if (playerNumber == 1) {    
        if (Math.sign(currentCount1.value) >= 0) {
            user1hp.value = user1hp.textContent;
            let lengthOfPoints = user1hp.value.toString().length; //Сохранение длины hp до обновления
            try {
                user1hp.value = eval(user1hp.value += `+${currentCount1.value}`);
            } catch (error) {
                console.log(`Error ${error}`);
            }

            //Animation
            if (currentCount1.value != 0) {
                //button OFF
                applyBtn1.classList.add('off-btn');
                resetBtn1.classList.add('off-btn');
                //sound
                let audio = new Audio('/assets/sounds/points-sound-start.mp3');
                audio.play();
                //animation
                const interval = setInterval(() => {
                    let generatedNumber = pointsGenerator(lengthOfPoints);
                    user1hp.textContent = generatedNumber;
                }, 100);
                setTimeout(() => {
                    clearInterval(interval);
                    if (user1hp.value <= 1000 && user1hp.value > 0) {
                        user1hp.classList.add('low-hp');
                    } else {
                        user1hp.classList.remove('low-hp');
                    }                    
                    user1hp.textContent = user1hp.value;
                    //button ON
                    applyBtn1.classList.remove('off-btn');
                    resetBtn1.classList.remove('off-btn');

                    //end sound
                    let audio = new Audio('/assets/sounds/points-sound-end.mp3');
                    audio.play();
                }, 1500);
            }
        } else {
            user1hp.value = user1hp.textContent;
            let lengthOfPoints = user1hp.value.toString().length; //Сохранение длины hp до обновления
            try {
                user1hp.value = eval(user1hp.value += currentCount1.value);
            } catch (error) {
                console.log(`Error: ${error}`);
            }
            user1hp.textContent = user1hp.value;

            //Animation
            if (currentCount1.value != 0) {
                //button OFF
                applyBtn1.classList.add('off-btn');
                resetBtn1.classList.add('off-btn');
                //sound
                let audio = new Audio('/assets/sounds/points-sound-start.mp3');
                audio.play();
                //animation
                const interval = setInterval(() => {
                    let generatedNumber = pointsGenerator(lengthOfPoints);
                    user1hp.textContent = generatedNumber;
                }, 100);
                setTimeout(() => {
                    clearInterval(interval);
                    if (user1hp.value <= 1000) {
                        user1hp.classList.add('low-hp');
                    } else {
                        user1hp.classList.remove('low-hp');
                    }
                    if (user1hp.value <= 0) { 
                        //lose
                        duelPanelUser1.classList.add('lose');                        
                        user1hp.textContent = 'Lose';
                        //end sound
                        let audio = new Audio('/assets/sounds/zero-points-sound-end.mp3');
                        audio.play();
                        //setCookie
                        let currentLosses = Number(getCookie('losses') ?? 0);
                        setCookie('losses', ++currentLosses, 31);
                        //draw
                        if (user2hp.textContent == 'Lose') {
                            user1hp.textContent = 'Draw';
                            user2hp.textContent = 'Draw';
                            user1hp.classList.replace('low-hp', 'draw');
                            user2hp.classList.replace('low-hp', 'draw');
                        }
                    } else {
                        user1hp.textContent = user1hp.value;
                        //button ON
                        applyBtn1.classList.remove('off-btn');
                        resetBtn1.classList.remove('off-btn');
                        //end sound
                        let audio = new Audio('/assets/sounds/points-sound-end.mp3');
                        audio.play();
                    }
                }, 1500);
            }
        }
        reset(1);
    }

    if (playerNumber == 2) {    
        if (Math.sign(currentCount2.value) >= 0) {
            user2hp.value = user2hp.textContent;
            let lengthOfPoints = user2hp.value.toString().length; //Сохранение длины hp до обновления
            try {
                user2hp.value = eval(user2hp.value += `+${currentCount2.value}`);
            } catch (error) {
                console.log(`Error: ${error}`);
            }

            //Animation
            if (currentCount2.value != 0) {
                //button OFF
                applyBtn2.classList.add('off-btn');
                resetBtn2.classList.add('off-btn');
                //sound
                let audio = new Audio('/assets/sounds/points-sound-start.mp3');
                audio.play();
                //animation
                const interval = setInterval(() => {
                    let generatedNumber = pointsGenerator(lengthOfPoints);
                    user2hp.textContent = generatedNumber;
                }, 100);
                setTimeout(() => {
                    clearInterval(interval);
                    if (user2hp.value <= 1000 && user2hp.value > 0) {
                        user2hp.classList.add('low-hp');
                    } else {
                        user2hp.classList.remove('low-hp');
                    }                    
                    user2hp.textContent = user2hp.value;
                    //button ON
                    applyBtn2.classList.remove('off-btn');
                    resetBtn2.classList.remove('off-btn');

                    //end sound
                    let audio = new Audio('/assets/sounds/points-sound-end.mp3');
                    audio.play();
                }, 1500);
            }
        } else {
            user2hp.value = user2hp.textContent;
            let lengthOfPoints = user2hp.value.toString().length; //Сохранение длины hp до обновления
            try {
                user2hp.value = eval(user2hp.value += currentCount2.value);
            } catch (error) {
                console.log(`Error: ${error}`);
            }
            user2hp.textContent = user2hp.value;

            //Animation
            if (currentCount2.value != 0) {
                //button OFF
                applyBtn2.classList.add('off-btn');
                resetBtn2.classList.add('off-btn');
                //sound
                let audio = new Audio('/assets/sounds/points-sound-start.mp3');
                audio.play();
                //animation
                const interval = setInterval(() => {
                    let generatedNumber = pointsGenerator(lengthOfPoints);
                    user2hp.textContent = generatedNumber;
                }, 100);
                setTimeout(() => {
                    clearInterval(interval);
                    if (user2hp.value <= 1000) {
                        user2hp.classList.add('low-hp');
                    } else {
                        user2hp.classList.remove('low-hp');
                    }
                    if (user2hp.value <= 0) {
                        //lose
                        duelPanelUser2.classList.add('lose');                        
                        user2hp.textContent = 'Lose';
                        //end sound
                        let audio = new Audio('/assets/sounds/zero-points-sound-end.mp3');
                        audio.play();
                        //setCookie
                        let currentWins = Number(getCookie('wins') ?? 0);
                        setCookie('wins', ++currentWins, 31);
                        //draw
                        if (user1hp.textContent == 'Lose') {
                            user1hp.textContent = 'Draw';
                            user2hp.textContent = 'Draw';
                            user1hp.classList.replace('low-hp', 'draw');
                            user2hp.classList.replace('low-hp', 'draw');
                        }
                    } else {
                        user2hp.textContent = user2hp.value;
                        //button ON
                        applyBtn2.classList.remove('off-btn');
                        resetBtn2.classList.remove('off-btn');

                        //end sound
                        let audio = new Audio('/assets/sounds/points-sound-end.mp3');
                        audio.play();
                    }
                }, 1500);
            }
        }
        reset(2);
    }
}

function restart ()                       
{
    // header.classList.add('closed');
    startMenuBackground.classList.remove('closed');
    duelPanelContainer.classList.add('closed');
    extraActions.classList.add('closed');

    user1hp.classList.remove('low-hp');
    user2hp.classList.remove('low-hp');
    user1hp.classList.remove('draw');
    user2hp.classList.remove('draw');
    musicPlayer.classList.add('closed');
    duelPanelUser1.classList.remove('lose');
    duelPanelUser2.classList.remove('lose');
    applyBtn1.classList.remove('off-btn');
    resetBtn1.classList.remove('off-btn');
    applyBtn2.classList.remove('off-btn');
    resetBtn2.classList.remove('off-btn');

    reset(3);
}

function reset (playerNumber)
{
    if (playerNumber == 1) {
        currentCount1.value = 0;
        currentCount1.textContent = 0;
    }
    if (playerNumber == 2) {
        currentCount2.value = 0;
        currentCount2.textContent = 0;
    }
    if (playerNumber == 3) {
        currentCount1.value = 0;
        currentCount1.textContent = 0;
        currentCount2.value = 0;
        currentCount2.textContent = 0;
    }
}

// Points generator
function pointsGenerator(length)
{
    let i = 0;
    let random = '';
    while (i < length) {
        randomNumber = Math.floor(Math.random() * 9) + 1;
        random += randomNumber.toString();
        i++;
    }
    return random;
}