let display = document.getElementById('display');

function appendNumber(number) {
  if (number === '.' && display.value.includes('.')) {
    return;
  }
  display.value += number;
}

function appendOperator(operator) {
  if (operator === '=') {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  } else {
    display.value += operator;
  }
}

// Adding event listeners for AC and DE buttons
document.querySelector('.del:nth-child(1)').addEventListener('click', clearDisplay);
document.querySelector('.del:nth-child(2)').addEventListener('click', deleteLastCharacter);

function clearDisplay() {
  display.value = '';
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}