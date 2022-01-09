
const currentValue = document.getElementById("current-value");
const previousValue= document.getElementById("previous-value");
const buttonsNumbers=document.querySelectorAll(".number");
const operationsButtons=document.querySelectorAll(".operations");
const operationsRootButtons=document.querySelectorAll(".operationsRoot");

const display = new Display(currentValue, previousValue);

buttonsNumbers.forEach(button =>{
    button.addEventListener("click",()=> display.addNumber(button.innerHTML))
})

operationsButtons.forEach(button=>{
    button.addEventListener('click',()=>display.compute(button.value))
})
operationsRootButtons.forEach(button=>{
    button.addEventListener('click',()=>display.compute(button.value))
})