
const cityInp = document.getElementById('cityInp')
const errorMessage = document.getElementById('errorMessage')



export default function checkInput(){
   
    const reg = /[0-9.!#$%&'*+/=?^_`{|}~-]/
   
   

    if(cityInp.value.length === 0){
        
        errorMessage.textContent ='';
        return false;

    }
    else if(reg.test(cityInp.value)){
      
        errorMessage.textContent="The input must be without numbers"
        return false
    }
    else if(cityInp.value.length <1 ){

        errorMessage.textContent="Not enough characters"
        return false
    }
    return true
   
}

