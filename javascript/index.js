function say(messsage) {
    console.log(messsage);
}

let result = say('Hello');
console.log('Result:', result);


function add(a, b) {
    return a + b;
}

let sum = add(10, 20);
console.log('Sum:', sum);


function  compare(a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }

    return 0;
}

function add() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(add(1, 2));
console.log(add(1, 2, 3, 4, 5));


 

























