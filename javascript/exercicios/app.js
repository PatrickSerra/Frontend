// let user  = {
//     name: "John",
//     age: 30
// }

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// for (const value of Object.values(user)) {
//     console.log(value);
// }

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// }

// let doublePrices = Object.fromEntries(
//     Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// )

// console.log(doublePrices);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };

//   function sumSalaries(salaries) {
//         let sum = 0
//         for(let salary of Object.values(salaries)) {
//              sum += salary   
//         }
//         return sum;
//   }

//   console.log(sumSalaries(salaries) ); // 650


//   function count(obj) {
//      return Object.entries(obj).length
//   }

//   console.log(count(salaries));
  

// let arr = ["John", "Smith"];
// let [firtName, surName] = arr;

// console.log(firtName);
// console.log(surName);

// let [firstName, surName] = "John Smith".split(' ');
// console.log(firstName, surName);

// let [name, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(name, title);


// let [a, b, c] = 'abc'
// let [one, two, three] = new Set([1, 2, 3]);

// let [one, two, three,...rest] = ["1", "2", "3", "4", "5"]
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(rest);



// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
// };

// let {title, width: w, height} = options;
// console.log(title);
// console.log(w);
// console.log(height);


let code = 'console.log("Hello")';
eval(code);
eval('1+1')
console.log(eval('(2 + 2) + 5'))

