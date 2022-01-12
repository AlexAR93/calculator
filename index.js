

const display=document.getElementById("display");
const keypadButtons=document.getElementsByClassName("keypad-button")

const keypadButtonsArray=Array.from(keypadButtons);

keypadButtonsArray.forEach(button=>{
    button.addEventListener("click",()=>{
        calculator(button, display)
    })
})

function calculator(button,display){
    switch(button.innerHTML){
        case 'C':
            clean(display);
            break;
        case '2√':
            display.innerHTML=calculateSquared(display.innerHTML);
            break;
        case '3√':
            display.innerHTML=calculateCubic(display.innerHTML);
            break;
        case '=':
            calculate(display);
            break;
        case '←':
            erase(display)
            break
        default:
            refresh(display,button);
            break;
    }
}

function calculate(display){
    display.innerHTML=eval(display.innerHTML)
}

function calculateSquared(x){
    return Math.round(Math.sqrt(x)*100)/100
}

function calculateCubic(x){
    return Math.round(Math.cbrt(x)*100)/100
}

function refresh(display,button){
    if(display.innerHTML == 0){
        display.innerHTML='';
    }
    display.innerHTML += button.innerHTML;
}

function clean(display){
    display.innerHTML=0;

}

function erase(display){
    let displayArray=Array.from(display.innerHTML)
    display.innerHTML=displayArray.slice(0,-1).join("");
}