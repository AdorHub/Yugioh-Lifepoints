const resetBtn = document.querySelector('.reset-btn');
const wins = document.querySelector('.wins');
const losses = document.querySelector('.losses');

let winsCookie = getCookie('wins') ?? 0;
let lossesCookie = getCookie('losses') ?? 0;

wins.textContent = winsCookie;
losses.textContent = lossesCookie;

resetBtn.addEventListener('click', () => {
    setCookie('losses', 0, 31);
    setCookie('wins', 0, 31);
    window.location.reload();
});

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

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