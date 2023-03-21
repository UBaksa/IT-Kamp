// console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);

document.title = "New Title";
// console.log(document.title);

// console.log(document.body);
// console.log(document.all);
// const headerTitle = document.all[10];
// console.log(headerTitle);

// headerTitle.textContent = "new logo";
// headerTitle.innerHTML = "<h1>new logo</h1>";

// console.log(document.forms);
// console.log(document.images);

// GET ELEMENT BY ID

// const headerTitle = document.getElementById("logo");
// console.log(headerTitle);

// headerTitle.textContent = "new logo";
// headerTitle.innerHTML = "<em>new logo</em>";

// PROMENA STILOVA

// headerTitle.style.borderBottom = "solid 3px #000";

// GET ELEMENTS BY CLASS NAME

// const containers = document.getElementsByClassName("container");
// // console.log(container);
// const container = containers[0];
// container.style.backgroundColor = "#ABABAB";
// container.style.border = "1px solid #f00";

// GET ELEMENTS BY TAG NAME

const listItems = document.getElementsByTagName("li");
// console.log(listItems);

// listItems.style.color = "blue"; ne radi na taj nacin, vec mora kroz iteraciju

// for (let i = 0; i < listItems.length; i++) {
//   if (i === 1) {
//     listItems[i].style.color = "brown";
//   } else {
//     listItems[i].style.color = "blue";
//   }
// }

// QUERY SELECTOR

const firstLogoId = document.querySelector("#logo");
const firstCont = document.querySelector(".container");
const firstLi = document.querySelector("li");

// console.log(firstLogoId);
// console.log(firstCont);
// console.log(firstLi);

// firstLi.textContent = "first item";

// const input = document.querySelector("input");
// input.value = "Hello World";

const input2 = document.querySelector("input[type='email']");
// input2.value = "test@test.com";
// input2.placeholder = "Unesite vasu email adresu";

// QUERY SELECTOR ALL

const listItems2 = document.querySelectorAll("li");
// console.log(listItems2);

// const evenLi = document.querySelectorAll("li:nth-child(even)");
// const oddLi = document.querySelectorAll("li:nth-child(odd)");

// for (let i = 0; i <= oddLi.length; i++) {
//   oddLi[i].style.backgroundColor = "blue";
//   evenLi[i].style.backgroundColor = "orange";
// }

// parentNode

// const title = document.getElementById("add");
// console.log(title.parentNode);

// parentElement

const title = document.getElementById("add");
console.log(title.parentElement);

// childNodes   (vraca sve elemente i razmake)

// const container = document.querySelector(".container");
// console.log(container.childNodes);

// children (vraca samo elemente)

// const container = document.querySelector(".container");
// console.log(container.children);

// firstElementChild

const container = document.querySelector(".container");
console.log(container.firstElementChild);

// lastElementChild
// nextElementSibling
// previousElementSibling

// createElement

const newDiv = document.createElement("div");

// add class

newDiv.className = "newDiv";

// add id

newDiv.id = "newId";

const textForNewDiv = (document.createTextNode = "Hello World");

newDiv.append(textForNewDiv);

container.appendChild(newDiv);

// input2.setAttribute("placeholder", "Unesite vasu email adresu");
// console.log(input2.getAttribute("placeholder"));

// NASTAVAK

//EVENTS

let button = document.querySelector("button");
button.addEventListener("click", buttonClicked); //ocekuje dva argumenta,prvi je u smislu na kakvu radnju ce da se primeni neka funkcija.

function buttonClicked(event) {
  // console.log(event);
  console.log(event.target.className);
  console.log(event.target.classList);

  // console.log(event.clientX);
  // console.log(event.clientY);

  console.log(event.altKey);
  console.log(event.ctrlKey);
  console.log(event.shiftKey);
  button.style.backgroundColor = "blue";
  button.style.color = "white";
}

// newDiv.addEventListener("dblclick", runEvent);
// newDiv.addEventListener("mousedown", runEvent);
// newDiv.addEventListener("mouseup", runEvent);
// // ovo dole je prelazak preko misa
// newDiv.addEventListener("mouseleave", runEvent);
// newDiv.addEventListener("mouseenter", runEvent);
// newDiv.addEventListener("mousemove", runEvent);

// // Za input polja
// newDiv.addEventListener("keymove", runEvent);
// newDiv.addEventListener("keydown", runEvent);
// newDiv.addEventListener("keyup", runEvent);
// newDiv.addEventListener("keypress", runEvent);

function runEvent(event) {
  console.log("Type of event:" + event.type);
}

let inputs = document.querySelectorAll("input");

let inputt = inputs[1];
console.log(inputt);

inputt.addEventListener("submit", getValue);

function getValue(e) {
  let itemvalue = e.target.value;
  console.log(itemvalue);
}

let form = document.querySelectorAll("form");
// form.addEventListener("submit", getValues);

function getValues(e) {
  e.preventDefault();
  let inputs = document.querySelectorAll("input");
  let itemName = inputs[1].value;
  let email = inputs[2].value;
  console.log(itemName);
  console.log(email);
  input[1].value = "";
  input[2].value = "";
}

let deleteButton = document.createElement("button");
const textdeleteButton = (document.createTextNode = "X");
deleteButton.className = "deletebtn";
deleteButton.style.cursor = "pointer";
deleteButton.append(textdeleteButton);

let lis = document.querySelectorAll("li");
let li = lis[lis.length - 1];
li.style.display = "flex";
li.style.justifyContent = "space-between";
li.appendChild(deleteButton);
console.log(deleteButton);
