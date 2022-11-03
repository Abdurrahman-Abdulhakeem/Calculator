class Calculator {
    constructor(upperDisplay, lowerDisplay) {
        this.upperDisplay = upperDisplay
        this.lowerDisplay = lowerDisplay
        this.clear()
    }

    clear() {
        this.prevDisplay = '';
        this.currentDisplay = '';
        this.operator = '';

    }

    appendToNum(number) {
        if(number === '.' && this.currentDisplay.includes('.'))return;
        this.currentDisplay = this.currentDisplay.toString() + number.toString();

    }

    updateDisplay() {
        this.lowerDisplay.innerText = this.currentDisplay;
        this.upperDisplay.innerText = this.prevDisplay + this.operator;
    }

    chooseOperator(operator) {
        if(this.currentDisplay === '')return;
        if(this.prevDisplay !== '') {
            this.compute();
        }
        this.operator = operator;
        this.prevDisplay = this.currentDisplay;
        this.currentDisplay = '';

    }

    compute() {
        let computation;
        const prev = parseFloat(this.prevDisplay);
        const current = parseFloat(this.currentDisplay);
        if(isNaN(prev) || isNaN(current))return;
        switch(this.operator) {
            case '+':
                computation =  prev + current;
                break;
            case '-':
                computation =  prev - current;
                break;
            case '÷':
                computation =  prev / current;
                break;
            case '×':
                computation =  prev * current;
                break;
            default:
                return;
        }

        this.currentDisplay = computation;
        this.prevDisplay = '';
        this.operator = '';
        

    }

    delete() {
        this.currentDisplay = this.currentDisplay.toString().slice(0, -1);

    }

}

const upperDisplay = document.querySelector('.upper-display');
const lowerDisplay = document.querySelector('.lower-display');
const clear = document.querySelector('.clear');
const deleteNum = document.querySelector('.delete-num');
const equals = document.querySelector('.equals');
const allNumbers = document.querySelectorAll('.number');
const allOperators = document.querySelectorAll('.operator');


const calculator = new Calculator(upperDisplay, lowerDisplay);

allNumbers.forEach(number => number.addEventListener('click', () => {
    calculator.appendToNum(number.innerText);
    calculator.updateDisplay();
}));

allOperators.forEach(operator => operator.addEventListener('click', () => {
    calculator.chooseOperator(operator.innerText);
    calculator.updateDisplay();
}));

equals.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

clear.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteNum.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});



// Add Time To Calculator
const myTime = document.querySelector('.time');

setInterval(() => {
    let hour = new Date().getHours().toString();
    let minutes = new Date().getMinutes().toString();
    let seconds = new Date().getSeconds().toString();

    let hms = `${hour}:${minutes}:${seconds}`;
    
    

    if(minutes.length < 2 && seconds.length < 2) {
        hms = `${hour}:0${minutes}:0${seconds}`;
        myTime.innerText = hms;

    }else if(minutes.length < 2) {
        hms = `${hour}:0${minutes}:${seconds}`;
        myTime.innerText = hms;

    }else if(seconds.length < 2) {
        hms = `${hour}:${minutes}:0${seconds}`;
        myTime.innerText = hms;

    }else {
        hms = `${hour}:${minutes}:${seconds}`;
        myTime.innerText = hms;
    }
    }, 1000);



