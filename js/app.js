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
    var temp = d.currently.temperature;

    console.log(temp);
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