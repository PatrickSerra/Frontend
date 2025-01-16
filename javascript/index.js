// {
//     function Person(name) {
//         this.name = name;
//     }

//     Person.prototype.getName = function () {
//         return this.name
//     }

//     let john = new Person('John Doe');
//     console.log(john.getName());

//     console.log(john instanceof Person);
//     console.log(john instanceof Object);

//     for(prop in john) {
//         console.log(prop);

//     }

// }

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }
// }

// let john = new Person('John Doe');
// console.log(john);
// console.log(john.getName());
// console.log(typeof Person);
// console.log(john instanceof Person);
// console.log(john instanceof Object);

// for(prop in john) {
//     console.log(prop);

// }

// class Person {
//     constructor(name) {
//         this._name = name
//     }

//     get name() {
//         return this._name
//     }

//     set name(newName) {
//         newName = newName.trim();
//         if(newName === '') {
//             throw 'The name cannot be empty'
//         }

//         this._name = newName;
//     }

// }

// let person = new Person('Jane Doe');
// console.log(person);

// person.name = 'Jane Smith';
// console.log(person.name);

// let Car = class {
//     constructor(brand) {
//         this._brand = brand;
//     }

//     get brand() {
//         return this._brand;
//     }
// }

// let car = new Car('Chevrolet')
// console.log(car);
// console.log(typeof Car);

// let app = new class {
//     constructor(name) {
//         this.name = name
//     }

//     start() {
//         console.log(`Starting the ${this.name}...`);
//     }
// }('Awesome App')

// app.start();

// class Config {
//     constructor(appName, appPort) {

//         if(Config.instance) {
//             return Config.instance;
//         }

//         this.appName = appName;
//         this.appPort = appPort;
//         Config.instance = this;
//     }
// }

// const instance1 = new Config('Shop', '4000');
// const instance2 = new Config('Blog', '3000');

// console.log(instance1);
// console.log(instance2);
// console.log(instance1 == instance2);

// let {appName: applet, appPort: port} = instance1;
// console.log(applet, port);

// let propName = 'c';

// const rank = {
//     a: 1,
//     b: 2,
//     [propName]: 3,
// }

// console.log(rank.c);

// const createObject = (key, value) => {
//     return {
//         [key]: value,
//     }
// }

// const persona = createObject('name', 'John');
// console.log(persona);

{
  function Animal(legs) {
    this.legs = legs;
  }

  Animal.prototype.walk = function () {
    console.log(`Walking on ${this.legs} legs`);
  };

  function Bird(legs) {
    Animal.call(this, legs);
  }

  Bird.prototype = Object.create(Animal.prototype);
  Bird.prototype.constructor = Animal;

  Bird.prototype.fly = function () {
    console.log("Flying");
  };

  console.log(Animal.prototype);

  let pigeon = new Bird(2);
  pigeon.walk();
  pigeon.fly();
}

class Animal {
  constructor(legs, color) {
    this.legs = legs;
    this.color = color;
    this.multicelular = true;
  }

  walk() {
    console.log(`Walking on ${this.legs} legs`);
  }

  static helloWorld() {
    console.log("Hello World");
  }
}

class Bird extends Animal {
  constructor(legs, color) {
    super(legs, color);
    this._color = color;
  }

  fly() {
    console.log("flying");
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }
}

let pigeon = new Bird(2, "Blue");
console.log(pigeon);

pigeon.walk();
pigeon.fly();
console.log(pigeon.color);

console.log(Object.getPrototypeOf(Animal));

class Dog extends Animal {
  constructor(color) {
    super(4, color);
    this.multicelular = false;
  }

  walk() {
    super.walk();
    console.log("Go walking");
  }
}

let bingo = new Dog("Red");
console.log(bingo);
bingo.walk();

Dog.helloWorld();

class Queue extends Array {
  enqueue(e) {
    super.push(e);
  }

  dequeue() {
    return super.shift();
  }

  peek() {
    return !this.empty() ? this[0] : undefined;
  }

  empty() {
    return this.length === 0;
  }
}

let customers = new Queue();
customers.enqueue("A");
customers.enqueue("B");
customers.enqueue("C");

while (!customers.empty()) {
  console.log(customers.dequeue());
}

function Book(title) {
  if (!new.target) {
    //throw "must use new operator with Book"
    return new Book(title);
  }

  this.title = title;
}

let book = Book("hamlet");
console.log();

console.log(book.title);

class Machine {
  constructor(name) {
    this.name = name;
    console.log(new.target.name);
  }
}

class Sander extends Machine {
  constructor(name, corded) {
    super(name);
    this.corded(corded);
  }
}

let m1 = new Machine("dril");

{
  class Person {
    constructor(name) {
      this._name = name;
    }

    get name() {
      return this._name;
    }

    set name(newName) {
      newName = newName.trim();
      if (newName === "") {
        throw "The name cannot be empty";
      }

      this._name = newName;
    }

    static createAnonymous(gender) {
      let name = gender == "male" ? "John Doe" : "Jane Doe";
      return new Person(name);
    }
  }

  let person = new Person("ana");
  console.log(person);

  let anonymous = Person.createAnonymous("male");
  console.log(anonymous);
}

{
  class Circle {
    #radius = 0;

    constructor(radius) {
      this.radius = radius;
    }

    get area() {
      return Math.PI * Math.pow(this.#radius, 2);
    }

    set radius(value) {
      if (typeof value === "number" && value > 0) {
        this.#radius = value;
      } else {
        throw "The radius must be a positive number";
      }
    }

    get radius() {
      return this.#radius;
    }

    static hasRadius(circle) {
      return #radius in circle;
    }
  }

  let circle = new Circle(10);
  console.log(circle.area);
  console.log(circle.radius);
  console.log(Circle.hasRadius(circle));
}

{
  function Person(name) {
    this.name = name;
  }

  let p1 = new Person("John");

  console.log(p1 instanceof Person);
  console.log(p1 instanceof Object);
  console.log(p1.constructor);
}

{
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  class Employee extends Person {
    constructor(name, title) {
      super(name);
      this.title = title;
    }
  }

  let p1 = new Person("John");
  console.log(p1 instanceof Person);

  let e1 = new Employee();
  console.log(e1 instanceof Employee);
  console.log(e1 instanceof Person);
  console.log(e1 instanceof Object);
  console.log(Person[Symbol.hasInstance](p1));
}

{
    let colors = ['red12', 'green13', 'blue14'];
    let cars = ['Hyundai', 'Chevrolet', 'Toyota'];
    let rgb = [...colors];

    console.log(colors == rgb);
    
    merge = [...colors, ...cars];
    console.log(merge);

    function paint(red, green, blue) {
        console.log(red, green, blue);
    }

    paint(...colors);

    const circle = {
        radius: 10
    }

    const coloredCirclue = {
        ...circle,
        color: 'black'
    }

    console.log(coloredCirclue);
    
    {}
}
