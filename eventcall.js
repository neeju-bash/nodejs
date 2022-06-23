var events = require('events');
var util=require('util');

var Person=function (name) {
     this.name=name;
};
util.inherits(Person, events.EventEmitter)

var neeraj=new Person('Neeraj');
var drishya=new Person('Drishya');
var mysi=new Person('Mysi');
var people=[neeraj,drishya,mysi];

people.forEach(function(person)
{
    person.on('speak',function(mssg)
    {
        console.log(person.name +' said ' +mssg)
    });
});
neeraj.emit('speak','hey guys');
drishya.emit('speak','how are you guys');
mysi.emit('speak','good to see you guys');