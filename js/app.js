function loadIt() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4de9116d35bb2754e1f7a09bc16f787b/-34.851582,138.477529')
        .then(function(resp) {
            return resp.json()
        }) // Convert data to json
        .then(function(data) {
            drawWeather(data);
            console.log(data);
        })
        .catch(function() {
            // catch any errors
        });
}

function drawWeather(d) {
    var temp = Math.round(parseFloat(d.currently.temperature - 32) * 5 / 9);
    var Daily = Math.round(parseFloat(d.daily.data[0].temperatureMax - 32) * 5 / 9);
    var rainPercent = Math.round(parseFloat(d.currently.precipProbability) * 100);
    var icon = '<img src="./img/svg/' + d.daily.data[0].icon + '.svg" />';
    var iconOne = '<img src="./img/svg/' + d.daily.data[1].icon + '.svg" />';
    var iconTwo = '<img src="./img/svg/' + d.daily.data[2].icon + '.svg" />';
    var iconThree = '<img src="./img/svg/' + d.daily.data[3].icon + '.svg" />';
    var iconFour = '<img src="./img/svg/' + d.daily.data[4].icon + '.svg" />';
    var iconFive = '<img src="./img/svg/' + d.daily.data[5].icon + '.svg" />';

    console.log(Daily);
    document.getElementById('weather1').innerHTML = Math.round(parseFloat(d.daily.data[0].temperatureMax - 32) * 5 / 9) + '&deg';
    document.getElementById('weather2').innerHTML = Math.round(parseFloat(d.daily.data[1].temperatureMax - 32) * 5 / 9) + '&deg';
    document.getElementById('weather3').innerHTML = Math.round(parseFloat(d.daily.data[2].temperatureMax - 32) * 5 / 9) + '&deg';
    document.getElementById('weather4').innerHTML = Math.round(parseFloat(d.daily.data[3].temperatureMax - 32) * 5 / 9) + '&deg';
    document.getElementById('weather5').innerHTML = Math.round(parseFloat(d.daily.data[4].temperatureMax - 32) * 5 / 9) + '&deg';
    document.getElementById('weather6').innerHTML = Math.round(parseFloat(d.daily.data[5].temperatureMax - 32) * 5 / 9) + '&deg';
    document.getElementById('temp-main').innerHTML = temp + '&deg';
    document.getElementById('dis').innerHTML = d.currently.summary;
    document.getElementById('rain-chance').innerHTML = rainPercent + '% CHANCE OF RAIN';
    document.getElementById('icon1').innerHTML = icon;
    document.getElementById('icon2').innerHTML = iconOne;
    document.getElementById('icon3').innerHTML = iconTwo;
    document.getElementById('icon4').innerHTML = iconThree;
    document.getElementById('icon5').innerHTML = iconFour;
    document.getElementById('icon6').innerHTML = iconFive;
}

// ./img/climacons-master/climacons-master/SVG/' + d.daily.data[0].icon + '.svg

window.onload = function() {
    loadIt();
}


var today = new Date();
var day = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
document.getElementById("today").innerHTML = day[today.getDay()];
today.setDate(today.getDate() + 1);
document.getElementById("day-of-week-1").innerHTML = day[today.getDay()];
today.setDate(today.getDate() + 1);
document.getElementById("day-of-week-2").innerHTML = day[today.getDay()];
today.setDate(today.getDate() + 1);
document.getElementById("day-of-week-3").innerHTML = day[today.getDay()];
today.setDate(today.getDate() + 1);
document.getElementById("day-of-week-4").innerHTML = day[today.getDay()];
today.setDate(today.getDate() + 1);
document.getElementById("day-of-week-5").innerHTML = day[today.getDay()];

//Clock

function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();

//menu

// This is a general function that could take functionality from many places.
// All it does is toggle a class on or off, like so:
// 01: Does "this" target HTML element have "that" class?
// 02: If it does, remove that class.
// 03: If it doesn't, add that class.
// 04: End function.
function toggleClass(targetElement, addedClass) {
    if (targetElement.classList.contains(addedClass)) {
        targetElement.classList.remove(addedClass);
    } else {
        targetElement.classList.add(addedClass);
    }
};

// This is the function we add to our menu button to enable its click functionality
document.querySelector('.menu-btn').addEventListener('click', function() {

    // This toggleClass is for added 'menu--open' to our menu HTML element. This will open the menu.
    toggleClass(document.querySelector('.menu'), 'menu--open');

    // This toggleClass is for adding '.menu-btn--on' to our menu button HTML element. This creates the animation of the hamburger/hotdog icon to the close icon.
    toggleClass(document.querySelector('.menu-btn'), 'menu-btn--on');
});

//theme switcher



const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
var body = document.body;

if (currentTheme) {
    body.classList.add(currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        body.classList.add('dark');
        body.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);