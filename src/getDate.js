const cityInp = document.getElementById('cityInp')

function getDate(){
    return cityInp.value
}
export default function getKey(){
    let key = `https://api.openweathermap.org/data/2.5/weather?q=${getDate()}&APPID=f06b0e3eda1261f955561daae8fce47a&units=metric`
   return key
}