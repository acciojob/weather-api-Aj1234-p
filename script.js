let checkWeather = document.querySelector('#find');
let shownWeatherData = document.querySelector('#weatherData');
const accessKey = `f72935cc48f386b9bec1acb800edc03e`
checkWeather.addEventListener('click',(e)=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${accessKey}`)
  .then(resp=>{
    if(!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return resp.json();
  })
  .then(data=>{
     shownWeatherData.textContent = `Current weather in ${data.name}: ${data.weather[0].main}`;
  })
  .catch(err=>{
    console.log("error ",err.message);
	  shownWeatherData.textContent = `Weather could not be found for your location ${err.message}`;
  })
})