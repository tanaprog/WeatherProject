const apiKey = "301074c8a9423b23020f6a947f72b2aa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'img/clouds.png'
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'img/clear.png'
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'img/rain.png'
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'img/drizzle.png'
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'img/mist.png'
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';

    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})