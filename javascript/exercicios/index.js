// function task1(callback) {
//     setTimeout(() => {
//         result  = 'Result 1'
//         callback(result);
//     }, 3000);
// }

// function task2(callback) {
//     setTimeout(() => {
//         result  = 'Result 2'
//         callback(result);
//     }, 1000);
// }

// function task3(callback) {
//     setTimeout(() => {
//         result  = 'Result 3'
//         callback(result);
//     }, 2000);
// }

// task1((result) => {
//     console.log(result);
//     task2((result) => {
//         console.log(result);
//         task3((result) => {
//             console.log(result);
//         })
//     })
// });

// task1(console.log)
// task2(console.log)
// task3(console.log)

// const promise = new Promise((resolve, reject) => {
//     const allowwell = false;

//     if (allowwell) {
//         resolve('All things went well')
//     } else {
//         reject('Oops ! Something went wrong')
//     }
// })

// console.log(promise);

// function verificarNumeroPar(numero) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof numero !== "number") {
//         reject(new Error("O argumento não é um numero"));
//       } else if (numero % 2 === 0) {
//         resolve("O numero é par");
//       } else {
//         resolve("O número é impar");
//       }
//     }, 2000);
//   });
// }

// verificarNumeroPar("vc")
//   .then((mensagem) => {
//     console.log(mensagem);
//   })
//   .catch((erro) => {
//     console.error("Erro", erro.message);
//   })
//   .finally(() => {
//     console.log("Operação concluída");
//   });

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);

// }).then((result) => {
//     console.log(result);
//     return result * 2;

// }).then((result) => {
//     console.log(result);
//     return result * 2;

// }).then((result) => {
//     console.log(result);
//     return result * 2;

// });

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);

// }).then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result * 2), 1000)
//     })

// }).then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result * 2), 1000)
//     })

// }).then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result * 2), 1000)
//     })
// });

// function buscarDados() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Dados buscados");
//       resolve({ id: 1, nome: "Produto" });
//     }, 2000);
//   });
// }

// function processarDados(dados) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Dados processados");
//       dados.processado = true;
//       resolve(dados);
//     }, 1000);
//   });
// }

// function salvarDados(dados) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Dados salvos");
//       resolve(dados);
//     }, 1000);
//   });
// }

// // process.on('unhandledRejection', (reason, promise) => {
// //     console.error('Rejeição não tratada em:', promise, 'motivo:', reason);
// //     // Aqui você pode registrar o erro, encerrar o processo ou tomar outras ações apropriadas
// // });

// // fetch('x')
// //     .then(response => response.json())
// //     .then(json => console.log(json))
// //     .catch(err => console.log('Error: ', err))

// let p1 = Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
//   // new Promise((resolve, reject) => setTimeout(() => reject(new Error('Whoops')))),
// ]);

// p1.then(console.log).catch(console.log);

// // let urls = [
// //     'https://api.github.com/users/iliakan',
// //     'https://api.github.com/users/remy',
// //     'https://api.github.com/users/jeresig'
// //   ];

// //   // map every url to the promise of the fetch
// //   let requests = urls.map(url => fetch(url));

// //   // Promise.all waits until all jobs are resolved
// //   Promise.all(requests)
// //     .then(responses => responses.forEach(
// //       response => console.log(`${response.url}: ${response.status}`)
// //     ));

// let p2 = Promise.allSettled([
//   new Promise((resolve) => setTimeout(() => resolve(4), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(5), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(6), 3000)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => reject(new Error("Whoops"), 2000))
//   ),
// ]);

// p2.then((results) => {
//   results.forEach((result) => {
//     if (result.status == "fulfilled") {
//       console.log(result.value);
//     }
//   });
// }).catch(console.log);

// let p3 = Promise.race([
//   new Promise((resolve) => setTimeout(() => resolve(7), 1000)),
//   new Promise((resolve) => setTimeout(() => resolve(8), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(9), 3000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops")), 4000)),

// ]).then(console.log).catch(console.log);

// let p4 = Promise.any([
//     new Promise((resolve) => setTimeout(() => resolve(10), 2000)),
//     new Promise((resolve) => setTimeout(() => resolve(11), 1000)),
//     new Promise((resolve) => setTimeout(() => resolve(12), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops")), 1000)),

// ]).then(console.log).catch(console.log);

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));

//   document.head.append(script);
// }

// let loadScriptPromise = function (src) {
//     return new Promise((resolve, reject) => {
//         loadScript(src, (err, script) => {
//             if (err) reject(err);
//             else resolve(script)
//         })
//     })
// }

// const util = require('util')

// let promise = Promise.resolve();

// promise.then(() => console.log('promise done!'))

// console.log('Code finished');


// async function f() {
//     return 1
// }

// console.log(f());
// f().then(console.log);


// async function f2() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => reject('error!'), 3000)
//     });

//     try {
//         let result = await promise;
//         return result
//     } catch(err) {
//         console.log('Here.....');
//         console.log(err);
//     }
// }

// let result = await f2()

// console.log('Aqui.........');
// console.log(result);

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        if(!response.ok) {
            throw new Error(`Request error: ${response.status}`)
        }

        const users = await response.json();
        return users 

    } catch (error) {
        throw error
    }
}

try {
    let users = await fetchUsers()
    console.log(users);
    
} catch (error) {    
    console.error(error);
}




