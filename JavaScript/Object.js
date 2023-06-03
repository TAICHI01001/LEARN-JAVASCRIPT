const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "blue",
  isAutomatic: true,
  features: ["air conditioning", "power windows", "backup camera"]
};

console.log(car.make); // output: "Toyota"
console.log(car.year); // output: 2022
console.log(car.features[0]); // output: "air conditioning"

car.price = 20000;
car.color = "red";

console.log(car.price); // output: 20000
console.log(car.color); // output: "red"

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "blue",
  isAutomatic: true,
  features: ["air conditioning", "power windows", "backup camera"],
  start: function () {
    console.log("Starting the car...");
  }
};

car.start(); // output: "Starting the car..."

const animal = {
  name: "Tiger",
  color: "Orange and black",
  weight: 120
};

console.log(animal.name)
console.log(animal.color)

const Animated = [
  {
    name: "Tiger1",
    color: "Orange",
    weight: 120
  },
  {
    name: "Tiger2",
    color: "White",
    weight: 150
  },
  {
    
    name: "Tiger3",
    color: "Black",
    weight: 100
  },
  {
    name: "Tiger4",
    color: "rainbow",
    weight: 200
  }
]

console.log(Animal[1])

Animal.forEach((Animal) => {
  console.log(Animal.name + ' ' + Animal.color)
});

const Animal = {
  name: "Tiger",
  age: 10,
  color: "Black",
  weight: 120,
  talk() {
    console.log(this.name + " Meow meow")
  },
  weightDetail() {
    if (this.weight < 80) {
      return 'underweight'
    }
    else if (this.weight > 200) {
      return 'heavy weight'
    }
    return 'normals'
  }
}

Animal.talk()
console.log(Animal.weightDetail());

function Tiger(name, color, weight, age) {
  this.name = name;
  this.color = color;
  this.weight = weight;
  this.age = age;
  this.talk = function () {
    console.log(`Hello, my name is ${this.name}`);
  }
}
let Tiger1 = new Tiger('Guy', 'black', 130, '5')
let Tiger2 = new Tiger('Gay', 'white', 150, '3')
console.log(Tiger1)
Tiger1.talk();



const Animals = {
  name: "Tiger1",
  age: 8,
  weight: 1.6,
  color: "orange"
}
for (const item of Animal) {
  console.log(item);
}

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const number of numbers) {
  sum += number;
}
console.log(sum);

const str = 'hello';
const arr = Array.from(str);
console.log(arr);