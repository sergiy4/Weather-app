import cloudImg from './assets/cloud.png'
import rainImg from './assets/rainn.png'
import sunImg from './assets/sun.png'
import drizzleImg from './assets/r.png'
import snowImg from './assets/snow2.png'
import ThunderImg from './assets/lightning.png'
import TornadoImg from './assets/tornado.png'
import brokenCloud from './assets/BrokenCloud.png'
import fewCloud from './assets/fewCloud.png'
import moonImg from './assets/moon.png'


import ItDay from './TimeInAnotherCountry'


const content_img = document.getElementById('content-img')
const img = document.createElement('img')
img.className="weatherIMG"
content_img.append(img)


export default function changeWeather(weather,temp,time,description){

  

        if(weather === "Clouds"){

            if(description === "few clouds"){
                fewClouds()

            }
            else if(description === "scattered clouds"){
                fewClouds()

            }
            else if(description === "broken clouds"){
                brokenClouds()

            }
            else{
                clouds()
                
            }
           
            
        }

        else if(weather === "Thunderstorm"){
            thunder()
        }
        else if(weather === "Drizzle"){
            drizzle()
        }
        else if(weather === "Rain"){
            rain()
        }
        else if(weather === "Clear"){

          if(ItDay(time)){

            if(temp>15){
                sun()
            }
            else{
                noImg()
            }

          }
          else{
            moon()
          }

          
           
        }
        else if(weather === "Snow"){
            snow()
        }
        else{
            noImg()
        }
    
  
    
}

function fewClouds(){
    img.style.scale = "0"
   
    img.className = "fewClouds"
    setTimeout(function(){
        img.src= fewCloud;
       
        img.style.scale = "1"

    },500)
   
    document.body.style.backgroundColor = "rgb(24, 24,29)";
    document.body.style.color =  "rgb(255, 255,255)";
}

function brokenClouds(){
    img.style.scale = "0"
   
    
    img.className = "brokenClouds"
    setTimeout(function(){
        img.src= brokenCloud;
       
        img.style.scale = "1"

    },500)
   
    document.body.style.backgroundColor = "rgb(24, 24,29)";
    document.body.style.color =  "rgb(255, 255,255)";
}

function clouds(){
    img.style.scale = "0"
    img.className="clouds"
    setTimeout(function(){
        img.src= cloudImg;
        
        img.style.scale = "1"

    },500)
   
    document.body.style.backgroundColor = "rgb(24, 24,29)";
    document.body.style.color =  "rgb(255, 255,255)";
}

function rain(){
    img.style.scale = "0"
    img.className = "rain"
    setTimeout(function(){
        img.src= rainImg;
       
      
        img.style.scale = "1"

    },500)
   
    document.body.style.backgroundColor = "rgb(78, 127,127)";
    document.body.style.color =  "rgb(255, 217,207)";
}

function sun(){
    img.style.scale = "0"
    img.className="sun"
    setTimeout(function(){
        img.src= sunImg;

        
       
        img.style.scale = "1"

    },500)
   
    document.body.style.backgroundColor = "rgba(255, 177,52,0.423)";
    document.body.style.color =  "rgb(13, 13,55)";
}

function snow(){
    img.style.scale = "0"
   

    img.className = "snow"
    setTimeout(function(){
        img.src= snowImg;
       
        img.style.scale = "1"

    },500)
   
    document.body.style.backgroundColor = "rgba(100, 160,255,0.423)";
    document.body.style.color =  "rgb(13,13,55)";
}

function drizzle(){
    img.style.scale = "0"
   

    img.className = "drizzle"
    setTimeout(function(){
        img.src= drizzleImg;
       
        img.style.scale = "1"

    },500)
   
    document.body.style.backgroundColor = "rgba(0, 69,72,0.423)";
    document.body.style.color =  "rgb(28,38,52)";
}

function thunder(){
    img.style.scale = "0"
   
    img.className = "thunder"
    setTimeout(function(){
        img.src= ThunderImg;
       
        img.style.scale = "1"

    },500)
   
    document.body.style.backgroundColor = "rgb(0, 0,0)";
    document.body.style.color =  "rgb(255,255,255)";
}

function tornado(){
    img.style.scale = "0"
    
    img.classList = 'tornado'
    setTimeout(function(){
        img.src= TornadoImg;
       
        img.style.scale = "1"

    },500)
   
    document.body.style.backgroundColor = "rgba(62, 10, 131, 0.462)";
    document.body.style.color =  "rgb(42, 0, 52)";
}

function noImg(){
    img.style.scale = "0"
   
 
   
    document.body.style.backgroundColor="rgb(161, 205, 255)"
    document.body.style.color="black"
}



function moon(){
    img.style.scale = "0"
   

    img.classList = "moon"
    setTimeout(function(){
        img.src= moonImg;
       
        img.style.scale = "1"

    },500)
   
    document.body.style.backgroundColor = "rgba(18, 16,49,0.845)";
    document.body.style.color =  "rgb(255, 255,255)";
}