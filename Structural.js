const CleverCalculator = require("./helpers/Calculators/CleverCalculator");
const { SUB, MULTIPLY, DIVIDE, ADD } = require("./helpers/constants");

//Decorator
class Calculator extends CleverCalculator {
    constructor() {
        super();
    }

    log = (term1, term2, operation) => {
        console.log(`T1: ${term1} OP: ${operation} T2: ${term2}`)
    }

    addWithLog = (term1, term2) => {
        this.log(term1, term2, ADD);
        const res = this.add(term1, term2);
        console.log('Res', res);
        return res
    }

    subWithLog = (term1, term2) => {
        this.log(term1, term2, SUB);
        const res = this.sub(term1, term2);
        console.log('Res', res);
        return res
    }

    divideWithLog = (term1, term2) => {
        this.log(term1, term2, DIVIDE);
        const res = this.divide(term1, term2);
        console.log('Res', res);
        return res
    }

    multiplyWithLog = (term1, term2) => {
        this.log(term1, term2, MULTIPLY);
        const res = this.multiply(term1, term2);
        console.log('Res', res);
        return res
    }
}

const calc = new Calculator();

calc.addWithLog(2, 2);
calc.addWithLog(2, 2);

// TS must have
