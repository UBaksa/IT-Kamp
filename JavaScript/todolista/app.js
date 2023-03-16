// console.dir(document);

console.log(document.domain);
console.log(document.title);
console.log(document.URL);
document.title = "New title";
console.log(document.title);
console.log(document.body);
console.log(document.all);

// const headertitle = document.all[10];
// console.log(headertitle);

// headertitle.textContent = "new logo";//koristi se samo za sadrzaj

// headertitle.innerHTML = "<h1>new logo<h1>"; //ponasamo se isto ko da smo u html file-u,kucamo sta nam treba npr ko ovde h1

// console.log(document.forms);

// GET ELEMENT BY ID

const headertitle = document.getElementById("logo");
console.log(headertitle);

headertitle.textContent = "new logo";

headertitle.innerHTML = "<i>new logo<i>";

// PROMENA STILOVA

headertitle.style.borderBottom = "solid 3px #000";

// GET ELEMENT BY CLASS NAME

const container = document.getElementsByClassName("container");
console.log(container);
// console.log(container[0]);
const containers = container[0];
containers.style.backgroundColor = "yellow";

containers.style.border = "1px solid red";

//GET ELEMENTS BY TAG NAME

const listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
  if (i === 1) {
    listItems[i].style.color = "brown";
  } else {
    listItems[i].style.color = "blue";
  }
}

// QUERY SELECTOR

const firstLogo = document.querySelector("#logo");
const firstCont = document.querySelector(".container");
const firstLi = document.querySelector("li");
console.log(firstLogo);
console.log(firstCont);
console.log(firstLi);

firstLi.textContent = "first item";

const input = document.querySelector("input");
input.value = "Hello World";

const input2 = document.querySelector("input[type='email']");

// input2.value = "test@test.com";

// input2.placeholder = "Unesite vasu e adresu";

// QUERY SELECTOR ALL

const listItems2 = document.querySelector("li");
console.log(listItems2);

const evenLi = document.querySelectorAll("li:nth-child(even)");
const oddLi = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < evenLi.length; i++) {
  evenLi[i].style.backgroundColor = "pink";
}

for (let i = 0; i < oddLi.length; i++) {
  oddLi[i].style.backgroundColor = "orange";
}

// parentNode

const titlee = document.getElementById("add");
console.log(titlee.parentNode);

// childNodes

// const containerr = document.querySelector(".container");
// console.log(container.childNodes);

//childern (vraca samo elemente)

// const containerr = document.querySelector(".container");
// console.log(container.childern);

// firstelementchild

const containerr = document.querySelector(".container");
console.log(container.firstElementChild);

// lastelement
// nextelement
// previoiselementsibling

//createElement

const newDiv = document.createElement("div");

// add class

newDiv.className = "newDiv";

newDiv.createTextNode = "Hello World";

containers.appendChild(newDiv);

// input2.setAttribute("placeholder", "unesite vasu email adresu");
