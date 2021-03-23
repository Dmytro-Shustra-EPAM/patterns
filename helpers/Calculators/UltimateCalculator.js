const OldCalculator = require("./OldCalculator");
const NewCalculator = require("./NewCalculator");
const { ADD, SUB } = require("../constants");

//Facade
module.exports = class UltimateCalculator {
    constructor() {
        this.oldCalculor = new OldCalculator();
        this.newCalculator = new NewCalculator();
    };

    add = (term1, term2) => this.oldCalculor.operations(term1, term2, ADD).res;

    sub = (term1, term2) => this.oldCalculor.operations(term1, term2, SUB).res;

    multiply = (term1, term2) => this.newCalculator.multiply(term1, term2);

    divide = (term1, term2) => this.newCalculator.divide(term1, term2);
}
