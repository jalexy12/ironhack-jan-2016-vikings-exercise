var Viking = function(name, health, strength){
	this.name = name;
	this.health = health;
	this.strength = strength;
}

Viking.prototype.attack = function(otherNpc){
	otherNpc.health = otherNpc.health - this.strength;
	console.log(`${this.name} has wounded ${otherNpc.name} for ${this.strength} points`)
}

module.exports = Viking;