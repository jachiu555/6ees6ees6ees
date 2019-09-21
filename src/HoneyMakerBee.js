class HoneyMakerBee extends Bee {
  // TODO..
  constructor() {
    super();
    this.age = 10;
    this.job = "make honey";
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot += 1;
  }

  giveHoney() {
    this.honeyPot -= 1;
  }
};

/*
the Bee superclass
 an age property that is set to 10
 a job property that is set to make honey
 a color property inherited from bee that is set to yellow
 a food property that is inherited from grub
 an eat method that is inherited from grub
 a honeyPot property that is set to 0
 a makeHoney method that adds 1 to that honeyBee's honeyPot
 a giveHoney method that subtracts 1 from that honeyBee's honeyPot
 */