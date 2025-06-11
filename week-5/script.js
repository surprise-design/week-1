function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

function cube() {
  const display = document.getElementById('display');
  const value = parseFloat(display.value);
  if (!isNaN(value)) {
    display.value = Math.pow(value, 3);
  }
}

function power() {
  const base = parseFloat(document.getElementById('display').value);
  const exponent = prompt("Enter exponent:");
  if (!isNaN(base) && !isNaN(exponent)) {
    document.getElementById('display').value = Math.pow(base, exponent);
  } else {
    alert("Invalid input");
  }
}

document.addEventListener('keydown', function (event) {
  const key = event.key;
  const display = document.getElementById('display');

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    display.value += key;
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape') {
    clearDisplay();
  }
});