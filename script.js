const apiKey = "431f02da1215df93302da9ea83725a29";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appID=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }else if(data.weather[0].main === "Haze"){
        weatherIcon.src = "images/haze.png"
    }else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "images/clear.png"
    }else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }else if(data.weather[0].main === "Partly-cloudy"){
        weatherIcon.src = "images/partly-cloudy.png"
    }else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "images/snow.png"
    }else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "images/haze.png"
    }else if(data.weather[0].main === "Sunny"){
        weatherIcon.src = "images/clear.png"
    }else{
        weatherIcon.src = "images/rain.png"
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})