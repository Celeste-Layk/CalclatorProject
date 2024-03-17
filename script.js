import calculator from "./calculator.js";
// Actions
// click a number
// click  clear button
// Click Delete button
// Click an Operation
// click a period button (included in addDigit function)
// Click equals

// steps
// 1. Assign export of calculator in calculator.js
// 2. Add event listeners for the buttons
// 3. activate the click for clear button, and number using if statements (look at the html to find the codes for matches)
// 4. make the delete button clickable
// 5. make operations clickable
// 6. activate the equals
// 7. go to html and find what div contains the class that shows the number in the display screen and get queryselectors
// 8. add displays to the calculator object
//9. in calculator.js add displays to calculator class thats being exported
//10.

const primaryOperandDisplay = document.querySelector("[dat-primary-operand");
const secondaryOperandDisplay = document.querySelector(
  "[data-secondary-operand"
);
const operationDisplay = document.querySelector("[data-operation");

const calculator = new calculator(
  primaryOperandDisplay,
  secondaryOperandDisplay,
  operationDisplay
); // creating a method to clear calculator

document.addEventListener(click, e => {
  if (e.target.matches("[data-all-clear")) {
    calculator.clear();
  }
  if (e.target.matches("[data-number")) {
    calculator.addDigit(e.target.textcontent); // adds the number to the calculator
  }
  if (e.target.matches("[data-delete")) {
    calculator.removeDigit(); // clears the last digit on screen (one digit at a time)
  }
  if (e.target.matches("[data-operation")) {
    calculator.chooseOperation(e.target.textcontent); // it uses the text to select the spesific operation
  }
  if (e.target.matches("[data-equals")) {
    calculator.evaluate(); //get response from claculator
  }
});
