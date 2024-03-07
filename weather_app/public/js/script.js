// API link
var weatherApi ;
// Selecting Html Elements
const input = document.getElementById('search');
const btn = document.querySelector('.btn');
const iconArea = document.querySelector('.wet-icon');
const wetterDeg = document.getElementById('deg');
const wetterStatus = document.querySelector('.wetter-status');
const feelDeg = document.getElementById('feel-deg');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const cityName = document.getElementById('city-name');
const errBox = document.querySelector('.error');

btn.addEventListener('click',getCity)
input.addEventListener('keyup',(e)=>{
    if (e.key ==='Enter') {
    getCity();
}})

function getCity(){
    try {
        if (input.value) {
            let city = input.value;
            weatherApi = `http://api.weatherapi.com/v1/current.json?key=8831b26f8fbc4111875171653240703&q=${city}&aqi=yes`
            getApiData();
        }else{
            throw Error('Lütfen Bir Sehir Adi Girin!')
        }
    } catch (error) {
        console.log(error.message)
        errBox.innerText = error.message
        errBox.style.transform='translateY(-50%)'
        setTimeout(()=>{
            errBox.style.transform='translateY(100%)'

        },(2000))
    }
}
function getApiData(e){
    let xhr = new XMLHttpRequest;

    xhr.open('GET',weatherApi,true);
    
    xhr.onload = function(){
        let apiData = JSON.parse(xhr.responseText);
        console.log(apiData);

        cityName.innerHTML = `${apiData.location.name} <br> ${apiData.location.region} ,${apiData.location.country}`
        iconArea.children[0].setAttribute('src',`${apiData.current.condition.icon}`)
        wetterDeg.innerText = apiData.current.temp_c;
        wetterStatus.innerText = apiData.current.condition.text;
        feelDeg.innerText = apiData.current.feelslike_c;
        humidity.innerText = apiData.current.humidity;
        windSpeed.innerText = apiData.current.wind_mph;
    }
    
    xhr.send();
}