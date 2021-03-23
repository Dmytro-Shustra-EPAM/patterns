const EmplyeeBuilder = require('./helpers/EmplyeeBuilder')

const emplyee1 = new EmplyeeBuilder('Vasil', 2000, 'Developer').build();
console.log(emplyee1)

const builder = new EmplyeeBuilder();
builder.updateEmployerName('Team Lead');
const emplyee2 = builder.updateMoney(5000).build();
console.log(emplyee2)

console.log(emplyee1 === emplyee2)
