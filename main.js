var Viking = require("./lib/viking.js");
var PitFight = require("./lib/pitfight.js");

viking1 = new Viking("Ase", 30, 6);
viking2 = new Viking("Dagmar", 100, 10);

thisPitFight = new PitFight(viking1, viking2, 10);

thisPitFight.initiate();

