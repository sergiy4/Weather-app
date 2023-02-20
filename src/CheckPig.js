import pig from './assets/pig.png'
import potato from './assets/potato.jpg'
const img = document.createElement('img')

export default function checkPig(country){
    if(country === "RU"){
        document.body.appendChild(img)
        img.src =pig;
        img.className ='pig'
        return false
    }
    else if(country === "BY"){
        document.body.appendChild(img)
        img.src =potato;
        img.className ='pig'
        return false
    }
    return true
}