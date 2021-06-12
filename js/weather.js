const API_KEY = "4ec8601a5f4ee9f4dfedb03e4735ad14";

function onGeoLocationSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    });
}
function onGeoLocationFail(error) {
  console.log(error);
  if (error.code === 1) {
    alert(error.message);
  }
}

const pos = navigator.geolocation.getCurrentPosition(
  onGeoLocationSuccess,
  onGeoLocationFail
);
