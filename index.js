const calc = require('./calc');
const calculator = calc.getCalcurator;
console.log(calculator.getValue());
console.log(calculator.minus(3));
console.log(calculator.plus(4));
console.log(calculator.time(3));