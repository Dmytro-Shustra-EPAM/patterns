const UltimateCalculator = require("./UltimateCalculator");
const { DIVIDE, ADD, SUB, MULTIPLY } = require("../constants");

module.exports = class CleverCalculator {
    constructor() {
        this.calc = new UltimateCalculator();
        //Better to use 4 caches
        this.cache = [];
    }

    getFromCache = (firstTerm, secondTerm, action) => {
        for (const item of this.cache) {
            const {term1, term2, operation, res} = item;
            if (operation === action && term1 === firstTerm && term2 === secondTerm) {
                console.log(res, 'Cache');
                return res;
            }
        }
    }

    setIntoCache = (term1, term2, operation, res) => {
        this.cache.push({term1, term2, operation, res})
    }

    getValue = (term1, term2, operation) => {
        const valueFromCache = this.getFromCache(term1, term2, operation)
        if (valueFromCache) {
            return valueFromCache;
        }

        let value;
        switch (operation) {
            case ADD:
                value = this.calc.add(term1, term2);
                break;
            case SUB:
                value = this.calc.sub(term1, term2);
                break;
            case DIVIDE:
                value = this.calc.divide(term1, term2);
                break;
            case MULTIPLY:
                value = this.calc.multiply(term1, term2);
                break;
            default:
                return NaN;
        }

        this.setIntoCache(term1, term2, operation, value);
        return value;
    }

    add = (term1, term2) => this.getValue(term1, term2, ADD)

    sub = (term1, term2) => this.getValue(term1, term2, SUB)

    multiply = (term1, term2) => this.getValue(term1, term2, MULTIPLY)

    divide = (term1, term2) => this.getValue(term1, term2, DIVIDE)

}
