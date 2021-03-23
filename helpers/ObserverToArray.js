module.exports = class ObserverToArray {
    constructor() {
        if (typeof ObserverToArray.instance === 'object') {
            return ObserverToArray.instance;
        }

        this.observers = []
        ObserverToArray.instance = this;
    }

    subscribe = (observer) => {
        this.observers.push(observer);
    }

    unSubscribe = (observer) => {
        this.observers = this.observers.filter(subscriber => subscriber !== observer)
    }

    notify = (data) => {
        this.observers.forEach(observer => observer(data));
    }

    getObservers = () => {
        return this.observers;
    }
}
