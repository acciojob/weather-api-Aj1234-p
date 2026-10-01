let checkWeather = document.querySelector('#find');
let shownWeatherData = document.querySelector('#weatherData');

function getWeather(){
   if(!navigator.geolocation){
       console.error("geolocation does not supported by this browser ");
       return;
   }
   navigator.geolocation.getCurrentPosition(success,error);
}

const accessKey = `f72935cc48f386b9bec1acb800edc03e`
function success(position){
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${accessKey}`)
  .then(resp=>{
    if(!resp.ok) throw new Error(`Weather could not be found for your location ${resp.status}`);
    return resp.json();
  })
  .then(data=>{
     shownWeatherData.textContent = `Current weather in ${data.name}: ${data.weather[0].main}`;
  })
  .catch(err=>{
    console.log("error ",err.message);
  })

}

function error(){
  console.error("location permission denied!!!");
}

checkWeather.addEventListener('click',(e)=>{
  getWeather();
})