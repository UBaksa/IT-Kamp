// console.log(document.domain)
console.log(document.title);

let headerNaslov = document.getElementById("header-title");

headerNaslov.textContent = "My to do list(first small project)";

let odd = document.querySelectorAll("li:nth-child(odd)");
let even = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "orange";
  odd[i].style.color = "white";
  odd[i].style.fontWeight = "bolder";
  even[i].style.backgroundColor = "yellow";
  even[i].style.color = "green";
  even[i].style.fontWeight = "bolder";
}

let newDiv = document.createElement("div");

newDiv.className = "divv";

console.log(newDiv);

let newDivTextContent = document.createTextNode("Novi div");

newDiv.appendChild(newDivTextContent);
console.log(newDiv);

let box = document.getElementById("box");

box.style.margin = "auto";

box.addEventListener("mousemove", runEvent);

let naslov = box.lastElementChild;

naslov.style.textAlign = "center";
naslov.style.paddingTop = "4rem";

naslov.addEventListener("mousemove", runmis);

function runmis(e) {
  naslov.style.color = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}
console.log(naslov);

function runEvent(e) {
  document.body.style.backgroundColor =
    "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
  console.log(`Id ove boje je ${e.offsetX},${e.offsetY},40`);
  //   naslov.style.color = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}
