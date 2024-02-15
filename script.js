
let btn_operator = document.querySelectorAll('.operator');
let btn_number = document.querySelectorAll('.number');

let addNumbers = (a,b) => {
    return a + b;
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
    switch(operator) {
        case '+':
            break;
        case '-':
            break;
        case '/':
            break;
        case 'x':
            break;
    }
}

let getOperator = () => {
    btn_operator.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.innerHTML);
        });
    });
}

let getNumber = () => {
    btn_number.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.innerHTML);
        });
    });
}

getOperator();
getNumber();