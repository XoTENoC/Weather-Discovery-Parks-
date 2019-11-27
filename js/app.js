function loadIt() {
    fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4de9116d35bb2754e1f7a09bc16f787b/34.8389,138.4839')
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
    document.getElementById('icon1').innerHTML = d.daily.data[0].icon;
}

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

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();