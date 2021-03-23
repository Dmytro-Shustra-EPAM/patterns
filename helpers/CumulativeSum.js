module.exports = class CumulativeSum {
    constructor() {
        this.sum = 0;
    }

    add(number) {
        this.sum += number;
        return this;
    }
}
