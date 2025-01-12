// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.getFullname = function() {
//     return this.firstName + ' ' + this.lastName;
// }

// let p1 = new Person("John", "Doe");
// let p2 = new Person('Jane', 'Doe');

// console.log(p1.getFullname());
// console.log(p2.getFullname());
// console.log(Object.getPrototypeOf(p1));



// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
    
//     getFullname() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// let p1 = new Person("John", "Doe");
// let p2 = new Person('Jane', 'Doe');

// console.log(p1.getFullname());
// console.log(p2.getFullname());
// console.log(Object.getPrototypeOf(p1));

let person = {
    name: "John Doe",
    greet() {
        return "Hi, I'm this.name";
    }
}

console.log(person.toString());
console.log(person.__proto__ === Object.prototype);

let teacher = Object.create(person);

teacher.name = 'Jane Doe'
teacher.teach = function (subject) {
    return "I can teach " + subject;
}

console.log(Object.getPrototypeOf(teacher) === person);


let counter = {
    counter: 0,
    next: function () {
        return ++this.count;
    }
}

counter.next();

this.color = 'Red';




function show() {
    console.log(this);
    
}

show()

let car = {
    brand: "Honda",
    getBrand: function () {
        return this.brand;
    }
}

console.log(car.getBrand());

let brand = car.getBrand.bind(car);

console.log(brand());


const canFetch = typeof globalThis.fetch === 'function';

console.log(canFetch);