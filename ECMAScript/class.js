class Animal {
    constructor(leg) {
        this.leg = leg;
    }

    printAnimal() {
        console.log(this.name + " has " + `${this.leg}` + " legs");
    }
}

class Dog extends Animal {
    constructor(name, leg) {
        super(leg);
        this.name = name;
    }
    
    getName() {
        console.log("My Name is " + this.name);
    }
}

myDog = new Dog("Puppy", 4);
myDog.getName();
myDog.printAnimal();