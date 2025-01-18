// function add(x, y) {
//   if(new.target) {
//     throw 'The add function cannot be called as a constructor'
//   }
//   return x + y;
// }

// console.log(add.length);
// console.log(add.prototype);
// console.log(typeof add);

// let result = add(10, 20);
// console.log(result);


// let cat = {type: 'Cat', sound: 'Meow'}
// let dog = {type: 'Dog', sound: 'Woof'}

// const say = function(message) {
//   console.log(message);
//   console.log(this); 
//   console.log(this.type + ' says ' + this.sound); 
// }


// say.apply(cat, ['What does a cat say?']);
// say.apply(dog, ['What does a dog say?']);
// say.call(cat, 'What does a cat say?');
// say.call(dog, 'What does a dog say?');

// let car = {
//   speed: 5,
//   start: function() {
//     console.log('Start with ' + this.speed + ' kn/h');
    
//   }
// }

// let aircraft = {
//   speed: 10,
//   fly: function () {
//     console.log('Flying');
//   }
// }


// let taxiing = car.start.bind(aircraft);
// taxiing();
// car.start.call(aircraft)


// class Vehicle {
  
//   #speed;

//   constructor(speed) {
//     this.speed = speed
//   }

//   get speed() {
//     return this.#speed
//   } 

//   set speed(value) {
//      this.#speed = value
//   }


//   start() {
//     console.log('Start with ' + this.speed + ' kn/h');
    
//   }
// }

// class Aircaft extends Vehicle {
  
//   fly() {
//     console.log('Flying');
//   }
// }


// let car1 = new Vehicle(10);
// console.log(car1);
// console.log(car1.speed);

// let aircraft1 = new Aircaft(20) 
// console.log(aircraft1);
// console.log(aircraft1.speed);

// aircraft1.fly();

// function add(x, y) {
//   return x + y;
// }

// console.log(add instanceof Function);

// let result = add.call(this, 10, 20);
// console.log(result);

// let greeting = 'Hi';
// let messenger = {
//   greeting: 'Hello'
// }

// function say(name) {
//   console.log(this.greeting + ' ' + name); 
// }

// say.call(messenger, 'John')



// function Box(height, width) {
//   this.height = height;
//   this.width = width;
// }

// function Widget(height, width, color) {
//   Box.call(this, height, width);
//   this.color = color;
// }

// let widget = new Widget('red', 100, 200);
// console.log(widget);

// const car = {
//   name: 'car',
//   start() {
//     console.log('Start the ' + this.name);
//   },
//   speedUp() {
//     console.log('Speed up the ' + this.name);
//   },
//   stop() {
//     console.log('Stop the ' + this.name);
//   },
// };

// const aircraft = {
//   name: 'aircraft',
//   fly() {
//     console.log('Fly');
//   },
// };

// car.start.call(aircraft);
// car.speedUp.call(aircraft)

// console.log(Object.getPrototypeOf(Box));


// const person = {
//   firstName: 'John',
//   lastName: 'Doe'
// }


// function greet(greeting, message) {
//   return `${greeting} ${this.firstName}. ${message}`
// }

// let result = greet.apply(person, ['Hello', 'How are you?'])
// console.log(result);

// const computer = {
//   name: 'MacBook',
//   isOn: false,
//   turnOn() {
//     this.isOn = true
//     return `The ${this.name} is On`
//   },
//   turnOff() {
//     this.isOn = false
//     return `The ${this.name} is Off`
//   },
// }

// const server = {
//   name: 'Dell PowerEdge t30',
//   isOn: false
// }

// result = computer.turnOn.apply(server);
// console.log(result);
// console.log(computer.turnOff.apply(server));

// let arr = [1, 2, 3];
// let numbers = [4, 5, 6];

// arr.push.apply(arr, numbers);
// console.log(arr);


// let person = {
//   name: 'John Doe',
//   getName() {
//     console.log(this.name);
//   }
// }

// person.getName();

// let f = person.getName;

// var name = 'Jane Doe';

// setTimeout(function () {
//   person.getName();
// }, 1000);

// console.log(this);


// let fn = person.getName.bind(person);
// setTimeout(fn, 1000)

// let runner = {
//   name: 'Runner',
//   run: function (speed) {
//       console.log(this.name + ' runs at ' + speed + ' mph.');
      
//   }
// }

// let flyer = {
//   name: 'Flyer',
//   fly: function (speed) {
//     console.log(this.name + ' flies at ' + speed + ' mph.');
//   }
// }

// Object.setPrototypeOf(flyer, runner)
// console.log(flyer);
// console.log(flyer instanceof Object);


// flyer.run(34);

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum instanceof Function);
// console.log(Function instanceof Object);

// console.log();



// let run = runner.run.bind(flyer, 20);
// run();

// console.log(run === runner.run);

// let name = 'John';

// function greeting() {
//   let message = 'Hi'
  
//   function sayHi() {
//       console.log(message + ' ' + name);
//   }

//   return sayHi;


// }

// let hi = greeting();
// hi();

//console.log(message);


// function greeting(message) {
//   return function (name) {
//     return message + ' ' + name;
//   }
// }

// let sayHi = greeting('Hi');
// let sayHello = greeting('Hello');

// console.log(sayHi('John'));
// console.log(sayHello('John'));

// for(let index = 1; index <= 3; index++) {
//   setTimeout(function () {
//     console.log('after ' + index + ' second(s): ' + index);
//   }, index * 1000);
// }


// function add(a, b) {
//   return a + b;
// }

// let sum = (function (a, b) {
//   return a + b;
// })(10, 20);

// console.log(sum);


// (function() {
  
//   let counter = 0;

//   function add(a, b) {
//     return a + b;
//   }

//   console.log(add(10, 20));

// })();

{
  function getNames() {
    let firstName = 'John',
        lastName = 'Doe';
  
    return [firstName, lastName]
  }
  
  let names = getNames();
  
  const [firstName, lastName] = getNames();
  console.log(firstName);
    
}

{
  function getNames() {
    let firstName = 'John',
        lastName = 'Doe';

    return { firstName, lastName }
  }

  let names = getNames();

  let firstName = names.firstName,
      lastName = names.lastName;

  console.log(firstName, lastName);
  
}

{
  let add = function (x, y) {
      return x + y;
  }

  console.log(add(10, 20));
}


{
  let add = (x, y) => x + y;

  console.log(add(10, 20)); 
  console.log(typeof add);
  console.log(add instanceof Function);
}

{
  let numbers = [4, 2, 6];

  numbers.sort(function(a, b) {
    return b - a;
  })

  console.log(numbers);
  
}

{
  let numbers = [4, 2, 6];
  numbers.sort((a, b) => b - a);
  console.log(numbers);
}


{
  let names = ['John', 'Mac', 'Peter'];
  let lengths = names.map(name => name.length);
  console.log(lengths);
}


{
  let logDoc = () => console.log(globalThis);
  logDoc();
}

{
  let square = x => x * x;

  console.log(square(3));
}


{
  let setColor = function (color) {
    return {value: color};
  }

  let backgroundColor = setColor('Red');
  console.log(backgroundColor.value);
  

}

{

  function Car() {
    this.speed = 0;

    this.speedUp = function (speed) {
      this.speed = speed;
      setTimeout(() => console.log(this.speed), 1000);
    }
  }

  let car = new Car();
  car.speedUp(50);

}