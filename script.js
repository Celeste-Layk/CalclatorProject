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
// 3. activate the click for clear button, and number using if statements (look at the html to find the codes for matches)(. clear(), .addDigit(e.target.textContent))
// 4. make the delete button clickable
// 5. make operations clickable (.chooseOperation(e.target.textContent))
// 6. activate the equals (evaluate)
// 7. go to html and find what div contains the class that shows the number in the display screen and get queryselectors
// 8. add displays to the calculator object
//9. in calculator.js add displays to calculator class thats being exported
//10. create a clear method on calculator on both calculaotr js and script.js ( assign it to textContent and make primary 0 and the others empty strings)
//11. make numbers clickable start with 0-9. Remember to remove the 0 if it shows up once numbers are typed in
// 12. add getters in calculator.js
//13. add setters to calculator.js
import Calculator from "./calculator.js";

const primaryOperandDisplay = document.querySelector("[data-primary-operand]");
const secondaryOperandDisplay = document.querySelector(
  "[data-secondary-operand]"
);
const operationDisplay = document.querySelector("[data-operation]");

const calculator = new Calculator(
  primaryOperandDisplay,
  secondaryOperandDisplay,
  operationDisplay
);

document.addEventListener("click", e => {
  if (e.target.matches("[data-all-clear]")) {
    calculator.clear();
  }
  if (e.target.matches("[data-number]")) {
    calculator.addDigit(e.target.textContent);
  }
  if (e.target.matches("[data-delete]")) {
    calculator.removeDigit();
  }
  if (e.target.matches("[data-operation]")) {
    calculator.chooseOperation(e.target.textContent);
  }
  if (e.target.matches("[data-equals]")) {
    calculator.evaluate();
  }
});
