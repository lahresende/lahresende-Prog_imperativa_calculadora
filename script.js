/*Elementos*/
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minutes');

let number1 = '';
let number2 = '';
let operator = '';
let buttons = document.getElementsByClassName('btn');

const clickButton = (event) => {
   const value = event.target.textContent;
   if(isNaN(value) && value !== '.'){
      if(value=== '=' && operator!==''){
        let result = '';
        if(operator==='+'){
            result = parseFloat(number1) + parseFloat(number2);            
        }
        if(operator==='-'){
            result = parseFloat(number1) - parseFloat(number2);            
        }
        if(operator==='x'){
            result = parseFloat(number1) * parseFloat(number2);            
        }
        if(operator==='÷'){
            result = parseFloat(number1) / parseFloat(number2);         
        }
        if(operator==='%'){
            result = parseFloat(number1) * 0.01 * parseFloat(number2);         
        }
        document.getElementById('display').textContent=result;
        number1 = '';
        number2 = '';
        operator = '';
      } else {
        if (value==='+' || value=== '-' || value==='x' || value==='÷' || value==='%'){
            if (number2 !== '') {
                let = ''
                if(operator==='+'){
                    result = parseFloat(number1) + parseFloat(number2);            
                }
                if(operator==='-'){
                    result = parseFloat(number1) - parseFloat(number2);            
                }
                if(operator==='x'){
                    result = parseFloat(number1) * parseFloat(number2);            
                }
                if(operator==='÷'){
                    result = parseFloat(number1) / parseFloat(number2);         
                }
                if(operator==='%'){
                    result = parseFloat(number1) * 0.01 * parseFloat(number2);         
                }
                number1 = result.toString();                
                number2 = '';
            }
            operator=value
            let display = document.getElementById('display')
            display.textContent= number1 + operator
        }
        if (value==='AC'){
            number1 = '';
            number2 = '';
            operator = '';
            document.getElementById('display').textContent='0';
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
      }
   }
   else{
    if (operator===''){
        number1  = number1  + value;
        document.getElementById('display').textContent=number1 
    } else {
        number2  = number2  + value;
        let display = document.getElementById('display')
        display.textContent=number1 + operator + number2
    }
    

   }
   const textLength = document.getElementById('display').textContent.length;
   document.getElementById('display').style.fontSize = ( 100 / ((textLength / 5) + 1 ) ) + "px";
  
};


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickButton, false);
}


/*Hora atualizada*/

const updateTime = ()=>{
const currentTime = new Date();

const currentHour = currentTime.getHours();
const currentMinutes = currentTime.getMinutes();

hourEl.textContent = currentHour.toString();
minuteEl.textContent = currentMinutes.toString().padStart(2,'0');
}



setInterval(updateTime,1000);
updateTime()
