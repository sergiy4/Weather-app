import './styles/style.css'
import checkInput from './FormValidation'
import getDate from './getDate'
import changeWeather from './ChangeWeather'
import ShowData from './ShowWeatherData'
import firstLoad from './firstLoad'
import checkPig from './CheckPig'


document.body.onload = firstLoad();

const form = document.getElementById('form')
const btnSearch = document.getElementById('btnSearch')
const errorMessage = document.getElementById('errorMessage')

window.onload = () =>{
    cityInp.onchange = checkInput;
    cityInp.oninput = checkInput;

}

function TimeoutPromise(time){
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            reject("Timeout")
        },time)

    })
}

function logMyError(err){
    errorMessage.textContent = err;
}

btnSearch.addEventListener('click', async function(){

    Promise.race([
        fetch(getDate()),
        TimeoutPromise(3000)
    ])
    .then(

        function(response){
            if(response.ok){
                return response.json()
              
            }
            else{
                console.log("res")
                throw new Error ("incorrect input")
            }
        },

        function(err){
            throw new Error("Timeout")
        }
    )
    .then(

        function(weatherObj){
            console.log("here2")
            if(checkPig( weatherObj.sys.country)){
                ShowData(weatherObj.main.temp, weatherObj.sys.country, weatherObj.main.feels_like, weatherObj.weather[0].description)
                changeWeather(weatherObj.weather[0].main, weatherObj.main.temp, weatherObj.weather[0].icon,weatherObj.weather[0].description)     
            }
        },

        function(err){
            logMyError(err)
          
        }
    )
    .catch(function(e){
        logMyError(e)
    })
 
})