// function getUsers(callback) {
//   let users = []

//   setTimeout(() => {
//     callback([
//       {username: 'john', email: 'john@test.com'},
//       {username: 'jane', email: 'john@test.com'}
//     ]);
//   }, 2000)

//   return users;
// }

// function findUser(username, callback) {
//   getUsers((users) => {
//     const user = users.find((user) => user.username === username)
//     callback(user);
//   })
// }

// findUser('john', console.log);

// let success = false;

// function getUsers() {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve([
//           {username: 'john', email: 'john@test.com'},
//           {username: 'jane', email: 'john@test.com'}
//         ]);
//       } else {
//         reject('Failed to the user list')
//       }

//     }, 2000)
//   });
// }

// function onFulfilled(users) {
//   console.log(users);
// }
// function onRejected(error) {
//   console.log(error);
// }

// getUsers().then(onFulfilled, onRejected);

// try {
//   console.log('Start of try runs');

//   lalala;
//   // ...no errors here

//   console.log('End of try runs');

// } catch(err) {
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);

// }

// console.log('Here.................');

// let json = '{"name":"John", "age": 30}'

// let bad_json = "{bad json}"

// try {
//   let user = JSON.parse(bad_json);
//   console.log(user.name);
//   console.log(user.age);
// } catch (err) {
//   console.log("Our apologies, the data has errors, we'll to request it one more time");
//   console.log(err.name);
//   console.log(err.message);
// }

// try {
//   let user = JSON.parse(json);

//   if (!user.gender) {
//     throw new SyntaxError("Incomplete data: no gender")
//   }

//   console.log(user.gender);
//   console.log(user.age);

// } catch (err) {
//   if (err instanceof SyntaxError) {
//     console.log(`${err.name}: ${err.message}"`);
//   } else {
//     throw err;
//   }
// } finally {
//   console.log('finally!!!!!!');

// }

// function func() {

//   try {
//     return 1;

//   } catch (err) {
//     /* ... */
//   } finally {
//     console.log( 'finally' );
//   }
// }

// console.log( func() ); // first works alert from finally, and then this one

// process.on()

// function divide(a, b) {

//   if (typeof b !== 'number' ) {
//     throw TypeError('b deve deve ser um número')
//   }

//   if (b === 0) {
//     throw RangeError('b deve ser maior que zero')
//   }
//   return a / b;

// }

// try {
//   console.log(divide(2, false));
// } catch(err) {
//   console.log(err.message);

// }

// let json = `{ "name": "John", "age": 30 }`;

// class ReadError extends Error {
//   constructor(message, cause) {
//     super(message);
//     this.cause = cause;
//     this.name = "ReadError";
//   }
// }

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// class PropertyRequiredError extends ValidationError {
//   constructor(property) {
//     super("No property " + property);
//     this.name = "PropertyRequiredError";
//     this.property = property;
//   }
// }

// function validateUser(json) {
//   if (!user.age) {
//     throw new PropertyRequiredError("age");
//   }

//   if (!user.name) {
//     throw new PropertyRequiredError("name");
//   }

//   return user;
// }

// function readUser(json) {
//   let user;

//   try {
//     user = JSON.parse(json);
//   } catch (err) {
//     if (err instanceof SyntaxError) {
//       throw new ReadError("Syntax Error", err);
//     } else {
//       throw err;
//     }
//   }

//   try {
//     validateUser(user);
//   } catch (err) {
//     if (err instanceof ValidationError) {
//       throw new ReadError("Validation Error", err);
//     } else {
//       throw err;
//     }
//   }
// }

// try {
//   readUser('{bad json}')
// } catch (e) {
//   if (e instanceof ReadError) {
//     console.log(e);
//     console.log("Original error" + e.cause);
//   } else {
//     throw e;
//   }
// }

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}

loadScript("script.js", function (error, script) {
  if (error) {
    console.log(error.message);
  } else {
    console.log(script);
    
  }
  console.log(somar(1, 2));
});

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  (err, script) => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert(_); // _ is a function declared in the loaded script
  }
);
