const CumulativeSum = require('./helpers/CumulativeSum');
const SpecialMath = require('./helpers/SpecialMath');
const Command = require('./helpers/Command');
const ObserverToArray = require('./helpers/ObserverToArray');
const ProxyArray = require('./helpers/ProxyArray');

// Task 1
const sum1 = new CumulativeSum();
console.log(sum1.add(10).add(2).add(50).sum);

// Task 2

const x = new Command(new SpecialMath(5));
x.execute('square');
x.execute('cube');
console.log(x.commandsExecuted); // ['square', 'cube']

// Task 3
const users = ["Alex Banks", "Eve Porcello"];

const poxedArray = new ProxyArray(users)

// Two observers for notifying
const observer = new ObserverToArray();
observer.subscribe(data => {
    console.log('Observer 1', data)
});

new ObserverToArray().subscribe(data => {
    console.log('Observer 2', data)
});

poxedArray.pop();
poxedArray.push('Alex 666');
console.log(poxedArray)
