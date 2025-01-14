// 'use strict'

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },

//     set fullName(fullname) {
//         const parts = fullname.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1] || '';
//     }

// }

// Object.defineProperty(person, 'ssn', {
//     configurable: false,
//     enumerable: true,
//     value: '012-38-9119'
// });

// Object.defineProperty(person, 'age', {
//     configurable: true,
//     enumerable: false,
//     writable: true
// });

// for(let property in person) {
//     console.log(property);

// }

// console.log(person.age);
// //person.age = 29; Error
// console.log(person.age);
// console.log(person.fullName);

// person.fullName = 'Mary Sue'
// console.log(person.fullName);

// Object.defineProperty(person, 'daysAlive', {
//     get: function() {
//         return this.age * 365
//     },

//     set: function(value) {
//         this.age = value / 365;
//     }

// })

// console.log(person.daysAlive);
// person.daysAlive = 10585;
// console.log(person.age);

// let descriptor = Object.getOwnPropertyDescriptor(person, 'age');
// console.log(descriptor);

// for(let prop in person) {
//     console.log(`${prop}: ${person[prop]}`);

// }

// let decoration = {
//     color: 'red'
// }

// let circle = Object.create(decoration)
// circle.radius = 10;

// for(const prop in circle) {
//     if (circle.hasOwnProperty(prop)) {
//         console.log(prop);
//     }
// }

// Array.prototype.foo = 100;

// const items = [10, 20, 30];
// let total = 0;

// for(const item in items) {
//     total += items[item]
// }

// console.log(total);

// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// person.age = 25;

// const keys = Object.keys(person);
// const values = Object.values(person);

// console.log(keys);
// console.log(values);

// for(const key in person) {
//     console.log(key);
// }

// Object.defineProperty(person, 'ssn', {
//     enumerable: false,
//     value: "123-456-7890"
// })

// for (const key in person) {
//     console.log(key);
// }

// console.log(person.propertyIsEnumerable('firstName'));
// console.log(person.propertyIsEnumerable('ssn'));

// const employee = Object.create(person, {
//     job: {
//         value: 'JS Developer',
//         enumerable: true
//     }
// })

// console.log(employee.hasOwnProperty('job'));
// console.log(employee.hasOwnProperty('firstName'));

// console.log('-------------------------------------');

// for (const key in employee) {
//     console.log(key);
// }

// const person = {
//   firstName: "John",
//   lastName: "Doe",

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// function createPerson(firstName, lastName) {
//   return {
//     firstName,
//     lastName,
//   };
// }

// person1 = createPerson("John", "Doe");
// person2 = createPerson("Jane", "Doe");

// let personActions = {
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// Object.setPrototypeOf(person1, personActions);
// console.log(person1.fullName);

// let car = {
//     "brand": "Chevrolet",
//     "model": "Camaro gold",
//     "price": '20000000'
// }


// let {brand: Brand, model, date: date = '01/01/2020'} = car;

// console.log(Brand);
// console.log(model);
// console.log(date);


function getUser(id) {

    if(id <= 0) {
        return null;
    }

    // get the user from database
    // and return null if id does not exist
    // ...
    
    // if user was found, return the user
    return {
        id: id,
        username: 'admin',
        profile: {
            avatar: '/avatar.png',
            language: 'English'
        }
    }
}

let user = getUser(0);
let profile = user?.profile
let avatar = user.profile.avatar


console.log(profile);
console.log(avatar);

