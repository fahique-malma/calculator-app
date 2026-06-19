const screen = document.getElementById("screen");

function appendValue(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = "";
}

function deleteLast() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = screen.value;

    expression = expression.replace(/÷/g, "/");
    expression = expression.replace(/×/g, "*");

    screen.value = Function("return " + expression)();
  } catch {
    screen.value = "Error";
  }
}

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || ["+", "-", "*", "/", ".", "%"].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {

    calculate();
  } else if (key === "Backspace") {

    deleteLast();
  } else if (key === "Escape") {

    clearScreen();
  }
});