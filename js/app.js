const key = 'd805c3c5c8679f646e3956c9a6e5405a';

function weatherBallon(cityID) {
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function(resp) {
            return resp.json()
        }) // Convert data to json
        .then(function(data) {
            drawWeather(data);
        })
        .catch(function() {
            // catch any errors
        });
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);
    var description = d.weather[0].description;

    document.getElementById('dis').innerHTML = description;
    document.getElementById('temp-main').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;

    // if (description.indexOf('rain') > 0) {
    //     document.body.className = 'rainy';
    // } else if (description.indexOf('cloud') > 0) {
    //     document.body.className = 'cloudy';
    // } else if (description.indexOf('sunny') > 0) {
    //     document.body.className = 'sunny';
    // } else {
    //     document.body.className = 'clear';
    // }
}
window.onload = function() {
    weatherBallon(2070830);
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