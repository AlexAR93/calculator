

class Display {
    constructor(previousValue,currentValue){
        this.currentValue=currentValue;
        this.previousValue=previousValue;
        this.calculator=new Calculator();
        this.typeOfOperation=undefined;
        this.valueActuality='';
        this.valuePrevious='';
        this.signs = {
            add: '+',
            divide:'%',
            multiply:'X',
            subtract:'-',
            squareRoot:"2√",
            cubicRoot:"3√",
            powerByX:"Xⁿ",
        }
    }

    erase(){
        this.valueActuality=this.valueActuality.toString().slice(0,-1)
        this.printValue()
    }
    cleanedAll(){
        this.valueActuality='';
        this.valuePrevious='';
        this.typeOfOperation=undefined;
        this.printValue();
    }
    compute(type){
        this.typeOfOperation !== "equal" && this.calculate();
        this.typeOfOperation !== "equal" && this.calculateRoot();
        this.typeOfOperation=type;
        this.valuePrevious=this.valueActuality || this.valuePrevious;
        this.valueActuality='';
        this.printValue();
    }
    addNumber(number){
        if(number==="." && this.valueActuality.includes('.')) return
            this.valueActuality = this.valueActuality.toString() + number.toString();
            this.printValue(); 
    }
    printValue(){
        this.currentValue.textContent = this.valueActuality;
        this.previousValue.textContent = `${this.valuePrevious} ${this.signs[this.typeOfOperation] || ''}`;
    }
    calculate(){
        const valuePrevious=parseFloat(this.valuePrevious);
        const valueActuality=parseFloat(this.valueActuality);

        if(isNaN(valueActuality) || isNaN(valuePrevious))return
        this.valueActuality=this.calculator[this.typeOfOperation](valuePrevious, valueActuality);
    }
    calculateRoot(){
        const valuePrevious=parseFloat(this.valuePrevious);
        if(isNaN(valuePrevious))return
        this.valuePrevious=this.calculator[this.typeOfOperation](valuePrevious);
    }

}