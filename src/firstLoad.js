import ShowData from "./ShowWeatherData";
import changeWeather from "./ChangeWeather";




export default async function firstLoad(){

    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ukraine&APPID=f06b0e3eda1261f955561daae8fce47a&units=metric`);
    const weatherObj = await weather.json();

    ShowData(weatherObj.main.temp, weatherObj.sys.country, weatherObj.main.feels_like, weatherObj.weather[0].description)
    changeWeather(weatherObj.weather[0].main, weatherObj.main.temp, weatherObj.weather[0].icon,weatherObj.weather[0].description)     
    
}

