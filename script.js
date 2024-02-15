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
    return a * b;
}

let divideNumbers = (a,b) => {
    return a / b;
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
            result_area.innerHTML = divideNumbers(a,b);
            firstNumber = result_area.innerHTML;
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
            if (button.innerHTML === "=") {
                operate(operator, firstNumber, result_area.innerHTML);
            } else {
                operator = button.innerHTML;
                operatorStatus = true;
                if (firstNumber === '') {
                    firstNumber = result_area.innerHTML;
                } else {
                    operate(operator, firstNumber, result_area.innerHTML)
                }
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
            updateResult(button.innerHTML);
            
        });
    });
}

getOperator();
getNumber();