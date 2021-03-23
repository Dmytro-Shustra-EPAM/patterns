const ObserverToArray = require('./ObserverToArray');

module.exports = class ProxyArray {
    constructor(array) {
        this.arrayChangeHandler = {
            get: (target, property) => {
                if (property === 'pop') {
                    new ObserverToArray().notify(`Pop: ${target[0]}`)
                }
                return target[property];
            },
            set: (target, property, value) => {
                if (typeof value !== 'number') {
                    new ObserverToArray().notify(`Push: ${value}`)
                }
                target[property] = value;
                return true;
            }
        };

        return new Proxy(array, this.arrayChangeHandler);
    }
}
