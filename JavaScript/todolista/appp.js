// console.log(document.domain)
console.log(document.title);

let headerNaslov = document.getElementById("header-title");

headerNaslov.textContent = "My to do list(first small project)";

let lis = document.querySelectorAll("li");

// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "orange";
//   odd[i].style.color = "white";
//   odd[i].style.fontWeight = "bolder";
//   even[i].style.backgroundColor = "yellow";
//   even[i].style.color = "green";
//   even[i].style.fontWeight = "bolder";
// }

let newDiv = document.createElement("div");

newDiv.className = "divv";

console.log(newDiv);

let newDivTextContent = document.createTextNode("Novi div");

newDiv.appendChild(newDivTextContent);
console.log(newDiv);

let box = document.getElementById("box");

box.style.margin = "auto";
box.style.borderRadius = "1rem";
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
}

let form = document.getElementById("addForm");
let listItem = document.getElementById("items");
let filter = document.getElementById("filter");
filter.addEventListener("keyup", filteritems);

console.log(listItem);

form.addEventListener("submit", addItem);
//funkcija za delete li-a.
listItem.addEventListener("click", removeItem);

// funkcija za removanje:
function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    //ovo je uslov da se iskljucivo klikne na dugme nikako na li!!
    if (confirm("Sigurni ste da zelite izbrisati?")) {
      let li = e.target.parentElement;
      listItem.removeChild(li);
    }
  }
}

//funkcija za dodavanje item-a.
function addItem(e) {
  e.preventDefault(); //ovo  uvek mora!
  let newItem = document.getElementById("item").value;
  //kreiranje novog blizeg elementa.
  let li = document.createElement("li");
  //add class
  li.className = "list-group-item";
  //kreiranje teksta kroz varijabulu
  li.appendChild(document.createTextNode(newItem));
  //kreiranje delete buttona.
  let deletebutton = document.createElement("button");
  deletebutton.className = "delete";
  //textnode
  deletebutton.appendChild(document.createTextNode("❌"));
  deletebutton.style.float = "right";
  //dodavanje dugmeta na sam li,odnosno item!
  li.appendChild(deletebutton);
  //dodavanje itema listi.
  listItem.appendChild(li);
}

//funckija za filtriranje!
function filteritems(e) {
  //prvo da se sve prebaci na lowercase!
  let text = e.target.value.toLowerCase();
  //get li
  let items = listItem.getElementsByTagName("li");
  //mora u niz da se pretvori.
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
