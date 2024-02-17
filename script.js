let firstNumber = '';
let operator = '';
let operatorStatus = false;

let result_area = document.querySelector('.result');

let addNumbers = (a,b) => {
    return Number(a) + Number(b);
}

let subtractNumbers = (a,b) => {
    return a - b;
}

let multiplyNumbers = (a,b) => {
    let number = a * b;
    return number.toFixed(2);
}

let divideNumbers = (a,b) => {
    let number = a / b;
    return number.toFixed(2);
}

let operate = (operator, a, b) => {
    result_area.innerHTML = ''
    switch(operator) {
        case '+':
            result_area.innerHTML = addNumbers(a,b);
            firstNumber = result_area.innerHTML;
            break;
        case '-':
            result_area.innerHTML = subtractNumbers(a,b);
            firstNumber = result_area.innerHTML;
            break;
        case '/':
            if (b === "0") {
                firstNumber = "Nope -.-";
                return firstNumber;
            } else {
                result_area.innerHTML = divideNumbers(a,b);
                firstNumber = result_area.innerHTML;
            }
            break;
        case 'x':
            result_area.innerHTML = multiplyNumbers(a,b);
            firstNumber = result_area.innerHTML;
            break;
    }
}

let updateResult = (number) => {
    result_area.innerHTML += number;
}

let getOperator = () => {
    let btn_operator = document.querySelectorAll('.operator');
    btn_operator.forEach((button) => {
        button.addEventListener('click', () => {
            operatorStatus = true;
            if (operator === '=') {
                operate(operator, firstNumber, result_area.innerHTML)
            }
            if (firstNumber === '') {
                firstNumber = result_area.innerHTML;
                operator = button.innerHTML;
            } else {
                operate(operator, firstNumber, result_area.innerHTML);
                result_area.innerHTML = firstNumber;
                operator = button.innerHTML;
            }
        });
    });
}

let getNumber = () => {
    let btn_number = document.querySelectorAll('.number');
    btn_number.forEach((button) => {
        button.addEventListener('click', () => {
            if (operatorStatus === true) {
                result_area.innerHTML = '';
                operatorStatus = false;
            } 
            if (button.innerHTML === '.') {
                if (result_area.innerHTML.indexOf('.') === -1) {
                    console.log(button);
                    updateResult(button.innerHTML); 
                }
            } else {
                updateResult(button.innerHTML);
            }
        });
    });
}

let clear = () => {
    let btn_clear = document.querySelector('.clear');
    btn_clear.addEventListener('click', () => {
        firstNumber = '';
        operator = '';
        result_area.innerHTML = '';
        operatorStatus = false;
    })
}

getOperator();
getNumber();
clear();