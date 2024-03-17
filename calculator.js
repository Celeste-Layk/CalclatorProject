export default class Calculator {
  constructor(
    primaryOperandDisplay,
    secondaryOperandDisplay,
    operationDisplay
  ) {
    this.primaryOperandDisplay = primaryOperandDisplay;
    this.secondaryOperandDisplay = secondaryOperandDisplay;
    this.operationDisplay = operationDisplay;

    this.clear();
  }
  get primaryOperand() {
    return parseFloat(this.primaryOperandDisplay.textContent);
  }
  set primaryOperand(value) {
    this.primaryOperandDisplay.textContent = value;
  }
  set secondaryOperand(value) {
    this.secondaryOperandDisplay.textContent = value;
  }
  set operation(value) {
    this.operationDisplay.textContent = value;
  }
  addDigit(digit) {
    if (this.primaryOperand === 0) {
      this.primaryOperand = digit;
      return;
    }
    this.primaryOperand = this.primaryOperand.toString() + digit;
  }
  clear() {
    this.primaryOperand = 0;
    this.secondaryOperand = null;
    this.operation = null;
  }
}
