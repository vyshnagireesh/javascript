// Parent class
class Flower {
  constructor(color) {
    this.color = color;
  }

  bloom() {
    console.log(`The ${this.color} flower is blooming.`);
  }
}

// Child class 
class Rose extends Flower {
  constructor(color, fragrance) {
    super(color); // Call parent constructor
    this.fragrance = fragrance;
  }

  details() {
    console.log(`This is a ${this.color} rose with a ${this.fragrance} fragrance.`);
  }
}

// Usage
const rose1 = new Rose("red", "sweet");
rose1.bloom();    
rose1.details();  