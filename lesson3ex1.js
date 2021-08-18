function CoffeeMake(typeOfCoffee){
    this.typeOfCoffee = typeOfCoffee;
    //console.log('I can make coffee');
}

CoffeeMake.prototype.on = function(){
    console.log('I am turned on')
}
CoffeeMake.prototype.off = function(){
    console.log('I am turned off')
}

function DripCoffeeMaker(typeOfCoffee){
    CoffeeMake.call(this, typeOfCoffee);
}
DripCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
DripCoffeeMaker.prototype.constuctor = CoffeeMake;

DripCoffeeMaker.prototype.makeCoffee = function(){
    console.log(`I make some coffee from ${this.typeOfCoffee}`);
}


function EspressoMachine(typeOfCoffee){
    CoffeeMake.call(this, typeOfCoffee);
}
EspressoMachine.prototype = Object.create(CoffeeMake.prototype);
EspressoMachine.prototype.constuctor = CoffeeMake;

EspressoMachine.prototype.makeEspresso = function(){
    console.log(`I make espresso from ${this.typeOfCoffee}`);
}


function CoffeeMachine(typeOfCoffee, milk, sugar){
    CoffeeMake.call(this, typeOfCoffee);
    this.milk = milk;
    this.sugar = sugar;
}
CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
CoffeeMachine.prototype.constuctor = CoffeeMake;

CoffeeMachine.prototype.makeCappuccino = function(){
    console.log(`I make cappuccino form ${this.typeOfCoffee}, ${this.milk}, ${this.sugar}`)
}
CoffeeMachine.prototype.makeLatte = function(){
    console.log(`I make latte form ${this.typeOfCoffee}, ${this.milk}, ${this.sugar}`)
}




let drip = new DripCoffeeMaker('ground coffee');
let espresso = new EspressoMachine('pressed ground coffee');
let coffeeMachine = new CoffeeMachine('coffee beans', 'milk', 'sugar');

console.log('drip', drip);
console.log('espresso', espresso);
console.log('coffeeMachine', coffeeMachine);

drip.on();
drip.makeCoffee();
drip.off();

espresso.on();
espresso.makeEspresso();
espresso.off();

coffeeMachine.on();
coffeeMachine.makeCappuccino();
coffeeMachine.makeLatte();
coffeeMachine.off();
