const descriptionEl = document.getElementById('weather_description')
const feelsEl = document.getElementById('feel_like')
const temperatureEL = document.getElementById('temperature')
const countryEL = document.getElementById('country')

export default function ShowData( temperature,country, feels, description){

    temperatureEL.textContent = `${Math.round(temperature)}°`;
    countryEL.textContent = country
    feelsEl.textContent = `feels like: ${Math.round(feels)}°` ;
    descriptionEl.textContent = description;
}