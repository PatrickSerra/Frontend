let users;

const url = 'https://jsonplaceholder.typicode.com/users';
const response = await fetch(url);
users = await response.json();

// export default (async () => {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//      const response = await fetch(url);
//      users = await response.json(); 
//  })();
 

export {users};