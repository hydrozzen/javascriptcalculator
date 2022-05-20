let screen = document.getElementById('screen')
buttons = document.querySelectorAll('button')
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText= e.target.innerText;
        console.log('buitton text is ',buttonText)

    if(buttonText=='X'){
        buttonText='*';
        screen.value = screenValue;
        screenValue += buttonText;
    }
    else if (buttonText == '='){
        screen.value = eval(screenValue);
    }
    else if (buttonText == 'C'){
        screenValue = "";
        screen.value = "";
        
    }
    else{
        screenValue += buttonText;
        screen.value = screenValue;
    }
         
    })
}