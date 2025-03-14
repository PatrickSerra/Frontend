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

// type StringOrNumber = string | number;
// type StringOrNumberArray = (string | number)[];
// type Point2D = [number, number];

// type Guitarrist = {
//   name?: string;
//   active: boolean;
//   albuns: StringOrNumberArray;
//   // playGuitar: (pick: string) => string
// };

// let point: Point2D;
// point = [1, 2];

// let myName: "Dave";

// let username: "Dave" | "John" | "Amy";
// username = "Amy";

// enum Status {
//   Pendente,
//   EmAndamento,
//   Concluido,
// }

// function send(status: Status) {
//   return Status[status];
// }

// let s = send(0);
// console.log(s);

// //functions
// const add = (a: number, b: number): number => {
//   return a + b;
// };

// function subtract(a: number, b: number): number {
//   return a - b;
// }

// const logMsg = (message: any): void => {
//   console.log(message);
// };

// console.log("Hello");
// logMsg(add(2, 3));

// //type mathFucntion = (a: number, b: number) => number

// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c !== "undefined") {
//     return a + b + c;
//   }

//   return a + b;

// };

// const sumAll = (a: number, b: number, c: number = 2): number => {
//     return a + b + c;

// };

// logMsg(addAll(2, 3, 2))
// logMsg(addAll(2, 3))

// //Rest parameters

// const total = (...nums: number[]): number => {
//     return nums.reduce((prev, curr) => prev + curr)
// }

// logMsg(total(1, 2, 3, 4))

// const createError = (errorMsg: string): never => {
//     throw new Error(errorMsg)
// }

// const infinite = () => {
//     let i: number = 1
//     while (true) {
//         i++;
//         if (i > 1000) break
//     }
// }

// const isNumber = (value: any): boolean => {
//     return typeof value === 'number'? true : value
// }

// const numberOrString = (value: number | string): string => {
//     if (typeof value === 'string') return 'string'
//     if (isNumber(value)) return 'number'
//     return  createError('This shoul never happen')
// }

// type One = string;
// type Two = string | number;
// type Three = "Hello";

// let a: One = "Hello";
// let b = a as Two;
// let c = a as Three;

// let d = <One>"World";
// let e = <string | number>"world";

// const addOrConcat = (
//   a: number,
//   b: number,
//   c: "add" | "contact"
// ): number | string => {
//   if (c === "add") return a + b;
//   return "" + a + b;
// };

// let myVal: string = addOrConcat(2, 2, "contact") as string;
// let nextVal: number = addOrConcat(2, 2, "contact") as number;

// // 10 as string
// (10 as unknown)

// const img = document.querySelector('img') as HTMLImageElement
// const myImg: HTMLImageElement | null = document.querySelector('#img')

// img.src
// myImg?.src

class Pessoa {}