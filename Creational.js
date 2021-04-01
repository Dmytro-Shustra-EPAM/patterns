const Fabric = require('./helpers/Fabric')

const fabric = new Fabric();

const Alex = fabric.createPerson('shopper', 'Alex');
const Alex2 = fabric.createPerson('shopper', 'Alex2', 20000);

console.log(Alex);
console.log(Alex2);

const Eve = fabric.createPerson('employee', 'Eve');
const Eve2 = fabric.createPerson('employee', 'Eve2');

console.log(Eve)
console.log(Eve2)
