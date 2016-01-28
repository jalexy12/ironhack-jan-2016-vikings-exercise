var Viking = require("./lib/viking.js");
var PitFight = require("./lib/pitfight.js");
var Saxon = require('./lib/saxon.js');
var War = require('./lib/war.js');

var vikings = [
	new Viking("Ase", 30, 6),
	new Viking("Dagmar", 100, 10),
	new Viking("Ake", 92, 20),
	new Viking("Birger", 125, 25),
	new Viking("Carr", 73, 3),
	new Viking("Dagfinn", 55, 2),
	new Viking("Elof", 7, 1),
	new Viking("Felman", 213, 30),
	new Viking("Gustav", 200, 3),
]

var saxon_town = [];

for (var i = 0; i < 100; i++){
	var health = Math.round((	Math.random() * 19) + 1);
	var strength = Math.round((	Math.random() * 19) + 1);
	saxon_town.push(new Saxon(health, strength));
}

var war = new War(vikings, saxon_town)
war.initiate();

// thisPitFight = new PitFight(viking1, viking2, 10);
// thisPitFight.initiate();


