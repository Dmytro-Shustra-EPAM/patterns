const EmployeeSingle = require('./Employee');
const Shopper = require('./Shopper');

module.exports = class EmployeeFabric {
    createPerson(type, name, money = 100, employer = '') {
        switch(type) {
            case 'employee':
                return new EmployeeSingle(name, money, employer)
            case 'shopper':
                return new Shopper(name, money)
        }
    }
}
