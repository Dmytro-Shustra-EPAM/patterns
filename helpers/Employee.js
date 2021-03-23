const Shopper = require('./Shopper')

class Employee extends Shopper {
    constructor(name, money = 0, employer = '') {
        super(name, money);
        this.employerName = employer;
        this.employed = true;
    }
}

module.exports = class EmployeeSingle extends Employee {
    constructor(name, money, employer) {
        if (typeof EmployeeSingle.instance === 'object') {
            console.log('Return old employee');
            return EmployeeSingle.instance;
        }

        super(name, money, employer);
        EmployeeSingle.instance = this;
        return this;
    }
}
