// let ranks = ["A", "B", "C"];

// for (let i =0; i < ranks.length; i++) {
//     console.log(ranks[i]);
// }

// for (let rank of ranks) {
//   console.log(rank);
// }

// class Sequence {
//   constructor(start = 0, end = Infinity, interval = 1) {
//     this.start = start;
//     this.end = end;
//     this.interval = interval;
//   }

//   [Symbol.iterator]() {
//     let counter = 0;
//     let nextIndex = this.start;

//     return {
//       next: () => {
//         if (nextIndex <= this.end) {
//           let result = { value: nextIndex, done: false };
//           nextIndex += this.interval;
//           counter++;
//           return result;
//         }

//         return { value: counter, done: true };
//       },

//       return: () => {
//         console.log('cleaning up....');
//         return { value: undefined, done: true }
//       }

//     };
//   }
// }

// let oddNumbers = new Sequence(2, 10, 2)

// // let iterator = evenNumbers[Symbol.iterator]();

// // let result = iterator.next();

// // console.log(result);

// for (const num of oddNumbers) {
//     if( num > 7 ) {
//         break;
//     }
//     console.log(num);
// }

// // for (const num of evenNumbers) {
// //     console.log(num);

// // }

// let str = "Minha casa"

// for (const char of str) {

//     if(char == 'n') {
//         break;
//     }

//     console.log(char);

// }

// function foo() {
//     console.log('I');
//     console.log('cannot');
//     console.log('pause');
// }

// //foo();

// function* generate(params) {
//     console.log('Invoked 1st time');
//     yield 1;
//     console.log('invoke 2nd time');
//     yield 2;
// }

// let gen = generate();

// // console.log(gen);

// // let result = gen.next()
// // console.log(result);

// // result = gen.next();
// // console.log(result);

// // result = gen.next();
// // console.log(result);

// // for (const g of gen) {
// //     console.log(g);
// // }

// // function* forever() {
// //     let index = 0;

// //     while(true) {
// //         yield index++
// //     }
// // }

// // let f = forever();
// // console.log(f.next());
// // console.log(f.next());

// // console.log(f);

// function* foo() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let f = foo();

// console.log(f.next());

// function* bar() {
//     yield;
// }

// let b = bar();
// console.log(b.next());

// function* generate() {
//     let result = yield;
//     console.log(`result is ${result}`);
// }

// let g = generate();

// console.log('-----------------------------------------------------------');

// console.log(g.next());
// console.log(g.next(1000));

// function* baz() {
//     let arr = [yield, yield]
//     console.log(arr);
// }

// let z = baz();

// console.log('-----------------------------------------------------------');
// console.log(z.next());
// console.log(z.next(1));
// console.log(z.next(2));

// function* yieldArray() {
//     yield 1;
//     yield [20, 30, 40];
// }

// console.log('-----------------------------------------------------------');

// let y = yieldArray();
// console.log(y.next());
// console.log(y.next());
// console.log(y.next());

// function* genx(param) {
//     console.log(param);
//     yield 1
//     let value = [yield, yield];
//     yield value
//     //yield* [20, 30, 40];

//     for (const item of [20, 30, 40]) {
//         yield item;
//     }
// }

// gen = genx('My param');

// let value = gen.next().value

// console.log(gen.next());
// console.log(gen.next(1))
// console.log(gen.next(2))
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// let scores = [80, 90, 70];

// for(let score of scores) {
//     score += 5
//     console.log(score);

// }

// let colors = ['Red', 'Green', 'Blue']

// for (const [index, color] of colors.entries()) {
//     console.log(`${color} is at index ${index}`);

// }

// const ratings = [
//     {user: 'John', score: 3},
//     {user: 'John', score: 4},
//     {user: 'John', score: 5},
//     {user: 'John', score: 2},
// ]

// let sum = 0

// for (const {score} of ratings) {
//     sum += score;
// }

// console.log(`Total scores: ${sum}`);

// let str = 'abc';

// for(let c of str) {
//     console.log(c);

// }

// colors = new Map();

// colors.set('red', '#ff0000');
// colors.set('green', '#00ff00');
// colors.set('blue', '#0000ff');

// for (let color of colors) {
//     console.log(color);
// }

// let nums = new Set([1, 2, 3]);

// for (const num of nums) {
//     console.log(num);

// }

// class Sequence {
//   constructor(start = 0, end = Infinity, interval = 1) {
//     this.start = start;
//     this.end = end;
//     this.interval = interval;
//   }
//   [Symbol.asyncIterator]() {
//     let counter = 0;
//     let nextIndex = this.start;
//     return {
//       next: async () => {
//         if (nextIndex <= this.end) {
//           let result = {
//             value: nextIndex,
//             done: false,
//           };
//           nextIndex += this.interval;
//           counter++;
//           return new Promise((resolve, reject) => {
//             setTimeout(() => {
//               resolve(result);
//             }, 1000);
//           });
//         }
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             resolve({
//               value: counter,
//               done: true,
//             });
//           }, 1000);
//         });
//       },
//     };
//   }
// }

// (async () => {

//     let seq = new Sequence(1, 10, 1);

//     for await (let value of seq) {
//         console.log(value);
//     }

// })();


// async function* asyncSequence(start, end) {
//     for (let i = start ; i <= end; i++){
//          yield new Promise((resolve, rejece) => {
//             setTimeout(() => {
//                 resolve(i);
//             }, 1000)
//          })      
//     }
// }

// (async () => {
//     let seq = asyncSequence(1, 5);

//     for await (let num of seq) {
//         console.log(num);
//     }
// })();

//let str = 'Javascript String type'
// let str = new String('Javascript String type')

// console.log(str.length);
// console.log(str.valueOf());
// console.log(str.toString());
// console.log(str.toLocaleString());
// console.log(str[0]);


// let firstName = 'John';
// let names = ['Milley', 'Doe']

// let fullName = firstName.concat(...names);
// console.log(fullName);
// console.log(firstName);

// console.log(str.substring(0, 10));
// console.log(str.substring(4, 10));
// console.log(str.indexOf('type'));

// let rawstring = ' Hi ';
// console.log(rawstring.trimEnd());

// let greeting = 'Hello';
// console.log(greeting.toLocaleUpperCase());
// console.log(greeting.toLocaleLowerCase());

// console.log('A'.localeCompare('B'));
// console.log('B'.localeCompare('B'));
// console.log('C'.localeCompare('B'));

// let expression = '1 + 2 = 3';
// let matches = expression.match(/\d+/g);

// for (const match of matches) {
//     console.log(match);
    
// }

// let simple = `This is a template literal`;

// let str = 'Template literal in ES6';

// console.log(str);
// console.log(str.length);
// console.log(typeof str);


// let anotherStr = `Here's a template literal`;

// let strWithBacktick = `Template literals use backticks \` instead of quotes`
// console.log(strWithBacktick);

// let msg = 'Multiline \n\
// string'

// console.log(msg);

// let p = 

// `This text
// can
// span multiple lines`;

// console.log(p);


// let post = {
//     title: 'JavaScript Template Literals',
//     excerpt: 'Introduction to JavaScript template literals in ES6',
//     body: 'Content of the post will be here...',
//     tags: ['es6', 'template literals', 'javascript']
// };


// let {title, excerpt, body, tags} = post; 

// let postHtml = `<article>
// <header>
//     <h1>${title}</h1>
// </header>
// <section>
//     <div>${excerpt}</div>
//     <div>${body}</div>
// </section>
// <footer>
//     <ul>
//       ${tags.map(tag => `<li>${tag}</li>`).join('\n      ')}
//     </ul>
// </footer>`;

// console.log(postHtml);



