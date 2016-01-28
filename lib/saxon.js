var Saxon = function(health, strength){
	this.name = "Saxon";
	this.health = health;
	this.strength = strength;
}

Saxon.prototype.attack = function(otherNpc){
	otherNpc.health = otherNpc.health - this.strength;
}

module.exports = Saxon;