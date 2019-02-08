// -------------------------- Home work#5 --------------------------
// -------------------------- Vasilenko Max --------------------------
// ---DOM.Tasks---
// ---Task1---

let head = document.head;
console.log(head);

// ---Task2---

let body = document.body;
console.log(body);

// ---Task3---

let task3 = document.body.childNodes;
console.log(task3);

// ---Task4(A)

let task4a = document.body.firstElementChild;
console.log(task4a);

// ---Task4(B)

let task4b = document.body.firstElementChild.childNodes;

for (let i = 1; i < task4b.length; ++i){
    console.log(task4b[i])
}

// ---Dom.TasksPart2---
// ---Task1---

function isParent(parent, child) {
    return console.log(parent.contains(child))
}

// ---Task2---

let link = document.getElementsByTagName('a');

for (let i = 0; i < link.length; i++){
    if (document.querySelector('ul').contains(link.item(i))=== false){
        console.log(link.item(i))
    }
}

// ---Task3---

let ul = document.querySelector("ul");

let prevUl = ul.previousElementSibling;
let nextUl = ul.nextElementSibling;

console.log(prevUl,nextUl);

// ---Task4---

number = document.getElementsByTagName('li');
ulCount = 0;

for (let i = 0; i < number.length; i++){
    ulCount += 1;
}
console.log(ulCount);

// ---Properties.Tasks---
// ---Task1---

let par = document.querySelector('p');
let text = par.textContent;
console.log(text);

// ---Task2---

function infoAboutNode(node) {
    let info = {};
    if (!typeof node === "object"){
       return console.log('Это не узел');
    }
    info.type = node.nodeType;
    info.name = node.localName;

    let children = node.childNodes;
    info.childNumbers = 0;
    for (let i = 0; i < children.length; i++){
       info.childNumbers += 1;
    }
    return info
}

// ---Task3---

ul = document.querySelector('ul').children;
let arr = [];
for (let i = 0; i < ul.length; i++){
  arr[i] = ul.item(i).textContent
}
// console.log(arr);

// ---Task4---

let paragraph = document.querySelector('p');
for (let i = 0; i < paragraph.childNodes.length; i++){
    paragraph.childNodes[i].data = '-text-'
}
console.log(paragraph);

//---Properties.TasksPart2---

//---Task1---
document.querySelector('ul').classList.add("list");

// ---Task2---

document.querySelector('ul').nextElementSibling.nextElementSibling.setAttribute('id', 'link');

// ---Task3---
let ulTask = document.querySelector('ul').children;
 for (let i = 0; i < ulTask.length; i++){
     ulTask[i].classList.add('item');
     i++;
 }

// ---Task4---
let customLinks = document.querySelectorAll('a');
 for (let i = 0; i < customLinks.length; i++){
     customLinks[i].classList.add('custom-link')
 }

//---Properties.TasksPart3---

//---Task1---
function addLi(){
    let findUl = document.querySelector('ul');
    let createLi = document.createElement('li');
    let textLi = 'item ' + (findUl.children.length + 1);

    createLi.appendChild(document.createTextNode(textLi));
    createLi.classList.add('new-item');
    findUl.appendChild(createLi);
}

//---Task2---
let aStrong = document.querySelector('ul').querySelector('li').children;
for (let i = 0; i < aStrong.length; i++ ){
    aStrong[i].insertAdjacentHTML('beforeend', '<strong></strong>')
}

//---Task3---

let createImg = document.createElement('img');
    createImg.setAttribute('src', 'index.jpg');
    document.body.insertAdjacentElement('afterbegin', createImg);

//---Task4---

document.querySelector('mark').insertAdjacentText('beforeend', 'green');
document.querySelector('mark').classList.add('green');

//---Task5---
let liCollection = document.getElementsByTagName('li');
let liArr = [];

for (let i = 0; i < liCollection.length; i++) {
    liArr.push(liCollection[i].textContent);
};

liArr.sort(function (a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
});

for (let i = 0; i < liArr.length; i++) {
    liCollection[i].innerHTML = liArr[i];
};