const API_KEY = "81c782d1e7f662ced0586c5fe3818b86";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  console.log("You live in", lat, log);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".location span");
      const weather = document.querySelector(".weather span");

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
