// console.log('Início');


// const promise = new Promise((resolve, reject) => {
//   let success = false;

//   setTimeout(() => {
//     if (success) {
//       resolve("Operação bem-sucedida!")
//     } else {
//       reject('Falha!')
//     }
//   }, 2000)
// })

// promise
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// console.log("Fim");

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(10), 2000);

// })
// .then(result => {
//   console.log(result);
//   return result * 2
// })
// .then(result => {
//   console.log(result);
//   return result * 3
// })
// .then(result => {
//   console.log(result);
// })

function asyncFunction(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value + 10), 2000)
  })
}

function asyncFunction2(value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value * 10), 1000)
  })
}

asyncFunction(5)
  .then(result => {
     console.log(result);
     return asyncFunction2(result);
  })
  .then(result => {
    console.log(result);
    return asyncFunction(result)
  })
  .then(result => {
    console.log(result);
    
  })