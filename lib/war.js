var TownAssault = function(assaulters, victims){
	this.assaulters = assaulters;
	this.victims = victims;	
	this.turns = Math.round((	Math.random() * 3) + 5);
	this.casualties = {
		vikings: [],
		victims: []
	}
} 

TownAssault.prototype.initiate = function(){
	for (var i = 1; i <= this.turns; i++){
		var survivors = [];

		this.assaulters.forEach((viking) => {
			var randomIndex = Math.round(Math.random() * (this.victims.length - 1 ));
			var randomVictim = this.victims[randomIndex];

			viking.attack(randomVictim);
			randomVictim.attack(viking);

			if (viking.health <= 0){
				this.casualties.vikings.push(viking);
			} else {
				survivors.push(viking)
			}

			if (randomVictim.health <= 0){
				this.casualties.victims.push(randomVictim);
				this.victims.splice(randomIndex, 1);
			}
		})

		this.assaulters = survivors;
	}

	this.printCasualtyReport();
}

TownAssault.prototype.printCasualtyReport = function(){
	console.log(`The vikings had ${this.casualties.vikings.length - 1} casualties`);
	console.log(`The saxons had ${this.casualties.victims.length - 1} casualties`);
}

module.exports = TownAssault;
