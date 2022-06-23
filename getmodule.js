var stuff = require('./moduleexport.js');// | ./ | is used to search in present directory.


// look here at the counter part, it is actually taking the arguments. and doing everything.
// We need to intialise the 'counter variable first.'
console.log(stuff.counter(['Hello','This is','Saif']));
console.log(stuff.adder(5,6));
console.log(stuff.pi);
console.log(stuff.adder(stuff.pi,44));