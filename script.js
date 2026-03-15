const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let expression = display.value;

    expression = expression.replace(/\+/g, "PLUS_TEMP");
    expression = expression.replace(/-/g, "+");
    expression = expression.replace(/PLUS_TEMP/g, "-");

    expression = expression.replace(/\*/g, "MULTIPLY_TEMP");
    expression = expression.replace(/\//g, "*");
    expression = expression.replace(/MULTIPLY_TEMP/g, "/");

    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}