const information = require ('./information.js');

let cowsay = require('cowsay');

console.log(cowsay.say({
	text :'hello i am ' + information.name + ' from ' + information.campus, 
	e : "oO",
	T : "U "
}));