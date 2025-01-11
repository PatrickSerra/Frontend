let sum = 10 + 20;
console.log(sum);

let netPrice = 9.99,
    shippingFee = 1.99;
let grossPrice = netPrice + shippingFee;
console.log(grossPrice);

let x = '10', y = '20';
let result = x + y;
console.log(result);

result = 10 + '20';
console.log(result);
console.log(NaN + NaN);
console.log(Infinity - Infinity);
console.log(30 - 10);
console.log(2 * 3);
console.log('5' * 2);
console.log('%' * 4);
console.log(Infinity * Infinity);
console.log(20 / 10);
console.log(20 / 0);
console.log('20' / 2);


let energy = {
    valueOf() {
        return 100;
    }
}

let currentEnergy = energy - 10;
console.log(currentEnergy);
console.log(currentEnergy * 2);
console.log(5 % -2);
console.log(5 % 2);
console.log(-5 % 3);
console.log(-5 % -3);
console.log(Infinity % 2);
console.log(10 % 0);
console.log(Infinity % Infinity);
console.log(10 % Infinity);
console.log(0 % 10);
console.log('10' % 3);

let num = 13;
let isOdd = num % 2 == 1;
console.log(true);
console.log(13 % 2);

let counter = 0;

counter = counter + 1;
console.log(counter)

counter += 1;
console.log(counter);

z = 3 
w = 4

z *= w;
console.log(z);
console.log(+"-10");
console.log(Number('-10'));
console.log(-"-10");
console.log(++num);
console.log(--num);
console.log(num++);
console.log(num);
console.log(+true);


let person = {
    name: 'John',
    toString: function () {
        return "25";
    }
}

console.log(+person);
console.log(10 > 20);
console.log(10 < 20);
console.log('alice' < 'Bob');
console.log('alice' < 'bob');
console.log('alice'.toLowerCase() < 'Bob'.toLowerCase());
console.log(10 < '20');
console.log(null == undefined);
console.log(NaN == 1);
console.log(NaN == NaN);
console.log("10" == 10);
console.log("10" === 10);
console.log(true > 0);
console.log(false > 0);
console.log(true == 1);
console.log(true === 1);

person = {}
console.log(person);
console.log(person.name);
console.log(person.name ??= 'Angela');









































 

























