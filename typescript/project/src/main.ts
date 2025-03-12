// let myName: string;
// let meaningOfLife: number;
// let isLoading: boolean;
// let album: string | number;

// myName = 'Patrick';
// meaningOfLife = 42
// isLoading = true;
// album = 'Van Halen';

// const sum = (a: number, b: string) => {
//     return a + b
// }

// let postId: string | number;
// let isActive: number | boolean;

// let re: RegExp = /\w+/g

// let stringArr = ['one', 'hey', 'Dave']
// let guitars = ['strat', 'Les Paul', 5150]
// let mixedData = ['EVH', '1984', true]

// stringArr[0] = 'John';
// stringArr.push('hey')

// guitars[0] = 1984
// guitars.unshift('Jim')
// //guitars.unshift(true)

// let test = []
// let bands: string[] = []

// bands.push('Van halen')


// //Tuple 

// let myTuple: [string, number, boolean] = ['Dave', 12, true]
// let mixed = ['John', 1, false]

// // myTuple = mixed
// myTuple[1] = 42

// //Objects
// let myObj: object 
// myObj = []
// myObj = bands 
// myObj = {}


// let user = {
//     name: 'Dave',
//     isActive: true
// }

// user.isActive = false

// interface Guitarrist {
//     name?: string, 
//     active: boolean,
//     albuns: (string | number)[]
//     // playGuitar: (pick: string) => string
// }

// let evh: Guitarrist = {
//     name: 'Eddie',
//     active: false,
//     albuns: [1894, 5150, 'OU812']
// }

// let jp: Guitarrist = {
//     name: 'Jimmy',
//     active: true,
//     albuns: ['I', 'II', 'IV']
// }

// type GreetGuitarist = (guitarrist: Guitarrist) => string;

// const greetGuitarist: GreetGuitarist = (guitarrist) => {
//     if (guitarrist.name) {
//         return `Hello ${guitarrist.name.toLocaleUpperCase()}`
//     }
//     return "No Guitarrist"
// }

// console.log(greetGuitarist(jp));

// enum Grade {
//     U = 1, 
//     D,
//     C,
//     B,
//     A
// }

// console.log(Grade.U);

