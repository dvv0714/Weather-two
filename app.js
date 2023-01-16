

const myKey = `4fe02e564bc3e200916f437e0b1d9006`;
const myApi = `https://api.openweathermap.org/data/2.5/weather`
const btnLocation = document.querySelector('.location');


btnLocation.addEventListener('click', () => {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError)
   }
})

function onSuccess(success) {
   const { latitude, longitude } = success.coords;
   fetch(`${myApi}?lat=${latitude}&lon=${longitude}&appid=${myKey}&units=metric`)
      .then((response) => response.json())
      .then((data) => showDetails(data))
      .catch((err) => console.log(err))
}

function onError(error) {
   console.log(error);
}


function showDetails(info) {
   console.log(info);

   const {
      name,
      main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
      sys: { country, },
      weather: { [0]: { id, description } },
      wind: { speed }
   } = info;



   document.querySelector('.geo').textContent = name;
   document.querySelector('.temprege').textContent = Math.floor(temp);
   document.querySelector('.brightness').textContent = description;
   document.querySelector('.humidity__sevises').textContent = humidity;
   document.querySelector('.wind__sevises').textContent = speed;

}

