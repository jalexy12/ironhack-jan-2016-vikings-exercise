var PitFight = function(viking1, viking2, turns){
	this.viking1 = viking1;
	this.viking2 = viking2;
	this.state = {
		currentlyAttacking: viking1,
		beingAttacked: viking2
	}
	this.turns = turns;
}

PitFight.prototype.initiate = function(){
	console.log(`The battle has begun between ${this.viking1.name} and ${this.viking2.name}`)
	this.battle();
}

PitFight.prototype.vikingAlmostDead = function(){
  return (this.viking1.health <= (this.viking2.strength + 1))
   || (this.viking2.health <= (this.viking1.strength + 1));
}

PitFight.prototype.battle = function (){
	for (var i = 1; i <= this.turns; i++){
		var attackingViking = this.state.currentlyAttacking;
		var beingAttacked = this.state.beingAttacked;
		if(!this.vikingAlmostDead()){
			attackingViking.attack(beingAttacked)
			// Switch the two vikings
			this.state.currentlyAttacking = beingAttacked;
			this.state.beingAttacked = attackingViking;
			// Print Board
			this.printStatus();
		} else {
			console.log("The match has ended");
			return;
		}
	}
}

PitFight.prototype.printStatus = function(){
	var attacking = this.state.currentlyAttacking;
	var defending = this.state.beingAttacked;
	console.log("\n****************************")
	console.log(`${attacking.name} is next up with ${attacking.health} health`)
	console.log(`${defending.name} is defending and has ${defending.health} health\n`)

}

module.exports = PitFight;