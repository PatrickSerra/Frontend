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

// console.log(document.body);

// document.body.user = {
//     name: "Patrick",
//     isAdmin: true
// }

// console.log("user" in document.body);

// document.body.sayTagName = function() {
//     console.log(`Hello, I'm ${this.tagName}`);
// }

// document.body.sayTagName();

// Node.prototype.sayName = function() {
//     console.log(`Hello, I'm ${this.nodeName}`);
// }

// let ul = document.querySelector('ul');
// console.log(ul instanceof Element);
// ul.sayName()

// document.documentElement.sayName();

// console.log(document.body.firstChild instanceof Node);
// document.body.firstChild.sayName();

// let firstP = document.querySelector('p');
// let firstInput = document.querySelector('input')

// console.log(firstP.id);
// console.log(firstP.something);

// console.log('type' in firstP);
// console.log('type' in firstInput);

// console.log(firstP.hasAttribute('something'));
// console.log(firstP.getAttribute('something'));

// firstP.setAttribute('my-attr', 'my-value')
// console.log(firstP.getAttribute('my-attr'));

// console.log(firstP.outerHTML);

// firstP.removeAttribute('my-attr');
// console.log(firstP.getAttribute('my-attr'));
// console.log(firstP.attributes.something);
// console.log(firstP.ID);
// console.log(firstP.outerHTML);

// firstInput.setAttribute('id', 'id');
// console.log(firstInput.id);

// firstInput.id = 'newId';
// console.log(firstInput.getAttribute('id'));

// firstInput.setAttribute('value', 'text')
// console.log(firstInput.value);

// firstInput.value = 'newValue'
// console.log(firstInput.getAttribute('value'));

// let checkbox = document.querySelector('input[type="checkbox"]');
// console.log(checkbox);

// console.log(checkbox.getAttribute('checked'));
// console.log(input.checked);

// let lastP = document.getElementById('onlyP');
// console.log(lastP.getAttribute('style'));
// console.log(lastP.style.color);

// let link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// console.log(link.href);

// let user = {
//     name: "Pete",
//     age: 25
// };

// for (let div of document.querySelectorAll('[show-info]')) {
//     let field = div.getAttribute('show-info')
//     div.innerHTML = user[field]
// }

// console.log(document.body.dataset.about);

// lastP.dataset.message = 'warning'

// let widget = document.querySelector('div[data-widget-name]');

// widget.textContent = widget.dataset.widgetName
// console.log(widget.getAttribute(['data-widget-name']));

// let alert_section = document.getElementById('alerts')

// let div = document.createElement('div');
// div.className = "danger";
// div.id = 'alert1'
// div.innerHTML = `

// <strong> Dangerous!</strong>

// `
// //document.body.append(div)
// //alert_section.append(div);
// alert_section.prepend(div);
// alert_section.after('End');
// alert_section.before('Start');

// alert_section.insertAdjacentHTML('afterbegin',
//     `
//     <div class="warning">
//         <strong>Other warning</strong>
//     </div>`
// )

// alert_section.insertAdjacentHTML('beforeend',
//     `
//     <div class="danger">
//         <strong>Other dangerous thing</strong>
//     </div>`
// )

// alert_section.insertAdjacentHTML('afterend',
//     `
//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>
//     `
// )

// setTimeout(() => {
//     alert_section.lastElementChild.remove()
// }, 2000)

// let div_clone = div.cloneNode()
// div_clone.innerHTML = `
//     <h1>I am out </h1>
// `

// alert_section.after(div_clone)

let alerts_section = document.getElementById('alerts')
let alerts_section_first = document.getElementById('alerts').firstElementChild
console.log(alerts_section_first.className);

// alerts_section_first.className = 'alert success'
// console.log(alerts_section_first.className);

alerts_section_first.classList.add('success');
alerts_section_first.classList.remove('success')
alerts_section_first.classList.toggle('success')

for (const name of alerts_section_first.classList) {
    console.log(name);
}

let danger_alert = document.createElement('div')
danger_alert.classList.add('alert', 'danger')
//alert.textContent = "Danger! You've read an important message."
danger_alert.innerHTML = `
    <strong> Danger!</strong> You've read an important message.

`
alerts_section.append(danger_alert)
danger_alert.dataset.read=true

//document.body.style.backgroundColor = prompt('background color?', 'gray');
//document.body.style.color = 'white'
//document.body.style.display = 'none';
//setTimeout(() => document.body.style.display = "", 1000)

document.body.style.cssText = `
    background-color: gray;
    color: white;
`

danger_alert.style.marginTop = '2em';

console.log(alerts_section.style.color);


let computedStyle = getComputedStyle(danger_alert)
console.log(computedStyle.marginTop);

danger_alert.style.marginTop =  `${parseInt(computedStyle.marginTop) + 20}px`
console.log(computedStyle.marginTop);

























