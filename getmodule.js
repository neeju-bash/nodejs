var stuff = require('./moduleexport.js');


console.log(stuff.counter(['Hello','This is','Saif']));
console.log(stuff.adder(5,6));
console.log(stuff.pi);
console.log(stuff.adder(stuff.pi,44));