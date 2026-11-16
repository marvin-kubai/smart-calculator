/* =================================
   1. JAVASCRIPT VARIABLES
================================= */

let firstNumber = 20;
let secondNumber = 10;

const calculatorName = "Smart Calculator";

console.log(typeof firstNumber);
console.log(typeof secondNumber);
console.log(typeof calculatorName);

/* =================================
   2. BASIC ARITHMETIC OPERATIONS
================================= */

console.log(firstNumber + secondNumber); // Addition
console.log(firstNumber - secondNumber); // Subtraction
console.log(firstNumber * secondNumber); // Multiplication
console.log(firstNumber / secondNumber); // Division
console.log(firstNumber % secondNumber); // Remainder

/* =================================
   3. TYPE CONVERSION
================================= */

let userInput = "250";

let convertedInput = Number(userInput);

console.log(convertedInput);
console.log(typeof convertedInput);

/* =================================
   4. SELECT HTML ELEMENTS (DOM)
================================= */

const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");
const operation = document.getElementById("operation");

/* =================================
   5. EVENT LISTENER
================================= */

calculateBtn.addEventListener("click", function () {
  /* =================================
       6. INPUT VALIDATION
    ================================= */

  if (firstNumberInput.value.trim() === "") {
    result.textContent = "Please enter the first number.";
    return;
  }

  if (secondNumberInput.value.trim() === "") {
    result.textContent = "Please enter the second number.";
    return;
  }

  /* =================================
       7. CONVERT INPUTS INTO NUMBERS
    ================================= */

  const num1 = Number(firstNumberInput.value);
  const num2 = Number(secondNumberInput.value);

  /* =================================
       8. GET SELECTED OPERATION
    ================================= */

  const selectedOperation = operation.value;

  /* =================================
       9. PERFORM CALCULATIONS
    ================================= */

  let answer;

  if (selectedOperation === "add") {
    answer = num1 + num2;
  } else if (selectedOperation === "subtract") {
    answer = num1 - num2;
  } else if (selectedOperation === "multiply") {
    answer = num1 * num2;
  } else if (selectedOperation === "divide") {
    if (num2 === 0) {
      result.textContent = "Cannot divide by zero.";
      return;
    }

    answer = num1 / num2;
  } else if (selectedOperation === "remainder") {
    if (num2 === 0) {
      result.textContent = "Cannot calculate remainder with zero.";
      return;
    }

    answer = num1 % num2;
  } else {
    result.textContent = "Please select a valid operation.";
    return;
  }

  /* =================================
       10. DISPLAY RESULT ON WEBPAGE
    ================================= */

  result.textContent = answer;
});
