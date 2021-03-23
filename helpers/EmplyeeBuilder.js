const EmployeeSingle = require('./Employee');

module.exports = class EmplyeeBuilder {
    constructor(name, money, employer) {
        this.employee = new EmployeeSingle(name, money, employer);
    }

    updateName = name => {
        this.employee.name = name;
        return this;

    }

    updateMoney = money => {
        this.employee.money = money;
        return this;
    }

    updateEmployerName = employerName => {
        this.employee.employerName = employerName;
        return this;
    }

    updateEmployed = employed => {
        this.employee.employed = employed;
        return this;
    }

    build = () => {
        return this.employee
    }
}
