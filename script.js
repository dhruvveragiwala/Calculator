const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let displayValue = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        
        if (button.classList.contains('num')) {
            displayValue += value;
            display.value = displayValue;
        } else if (button.classList.contains('operator')) {
            firstOperand = displayValue;
            operator = value;
            displayValue = '';
        } else if (value === 'CLEAR') {
            displayValue = '';
            operator = '';
            firstOperand = '';
            secondOperand = '';
            display.value = '';
        } else if (value === 'DELETE') {
            displayValue = displayValue.slice(0, -1);
            display.value = displayValue;
        } else if (value === '=') {
            secondOperand = displayValue;
            displayValue = evaluate(firstOperand, secondOperand, operator);
            display.value = displayValue;
        }
    });
});

function evaluate(firstOperand, secondOperand, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case 'x':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
    }
    return result.toString();
}
