// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// for (let i = 0; i < document.body.childNodes.length; i++) {
//   console.log(document.body.childNodes[i]);
// }

// console.log(typeof document.body);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.hasChildNodes());

// for (const node of document.body.childNodes) {
//   console.log(node);
// }

// console.log(Array.from(document.body.childNodes));
// console.log(document.body.parentNode);
// console.log(document.body.parentNode == document.documentElement);
// console.log(document.body.previousSibling);
// console.log(document.head.nextSibling);

// for (const element of document.body.children) {
//   console.log(element);
// }

// console.log(Array.of(document.body.children));
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.previousElementSibling);
// console.log(document.head.previousElementSibling);
// console.log(document.body.parentElement);
// console.log(document.documentElement.parentNode);
// console.log(document.documentElement.parentElement);

// console.log(table.rows);

// let th = table.rows[0].cells[0];
// let tbody = table.tBodies[0]
// th.style.backgroundColor = "red";
// tbody.style.backgroundColor = 'green'

// console.log(document.body.children[0].nextElementSibling);

// const table = document.body.children[1];

// const firstRow = table.rows[0]
// console.log(firstRow);

// firstRow.style.backgroundColor  = 'green';

// let header = document.getElementById("header");
// header.style.background = "red";

// let uls = document.querySelectorAll("ul > li:last-child");

// for (let li of uls) {
//   console.log(li.innerHTML);
// }

// let ul = document.querySelector("ul");

// let firstLi = ul?.firstElementChild;

// firstLi.style.background = "yellow";

// let listaCompras = document.querySelector(".lista-compras");

// listaCompras.style.color = "violet";

// for (const elem of document.querySelectorAll("li")) {
//   if (elem.matches('li[class="especial"]')) {
//     elem.style.background = "gold";
//   }
// }

// uls = document.getElementsByTagName("ul");
// console.log(uls[uls.length - 1]);

// console.log(ul.contains('li'));

// // uls = document.querySelectorAll("ul");
// // console.log(uls.length);

// let uls = document.querySelectorAll("ul");
// let ul = uls[0];

// let especial_li = ul.querySelector("li#especial");
// console.log(especial_li.firstChild);

// let empty_uls = document.getElementsByName("empty");
// console.log(empty_uls);

// let empty_ul = document.querySelector("ul[name='empty']");
// console.log(empty_ul);


// console.log(document instanceof Node);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.documentElement.constructor.name);


// for (const node of document.body.childNodes) {
//     if(node instanceof HTMLUListElement) {
//        console.log('ul...............')
//     }
// }

// console.log(document.body)
// console.dir(document.body)


// let elem = document.body 

// console.log(elem.nodeType);
// console.log(elem.firstChild.nodeType);
// console.log(document.nodeType);
// console.log(document.body.nodeName);
// console.log(document.body.tagName);
// console.log(elem.firstChild.nodeName);
// console.log(elem.firstChild.tagName);

// console.log(document.body.innerHTML);

// setTimeout(() => {
//   document.body.innerHTML += '<h1>Adicionado</h1>'
// }, 3000)


// console.log(document.body.outerHTML);

// let li = document.querySelector('ul').firstElementChild;
// console.log(li.firstChild.data);

// let comments = []

// for (const element of document.body.childNodes) {     
//      if(element.nodeName == '#comment') {
//          comments.push(element.data)
//      }
// }

// console.log(comments);

// let ul = document.querySelector('ul');
// console.log(ul.textContent);

//let title = prompt("Qual é o nome da lista de compras", '<b>Lista</b>')

// let h1 = document.querySelector('h1');
// let titleInput = document.getElementById('title-input');

// //h1.innerHTML = title;
// h1.textContent = titleInput.value;

// setInterval(() => h1.hidden = !h1.hidden, 1000);

// let p = document.querySelector('p');
// console.log(p.textContent);
// console.log(p.id);
// console.log(titleInput.type);







