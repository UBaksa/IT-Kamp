const niz = [4, 5, 5, 6, 4, 9, -1, 5];

// Klonirati niz.

const niz2 = niz.map(function (element) {
  return element;
});
console.log(niz2);

// spread operator(...)
// pomocu njega kloniramo niz ili objekat.

const niz3 = [120, 110, 100, ...niz];

console.log(niz3);

const obj = {
  firstname: "Haris",
  lastname: "Muslic",
  status: "samo liverpul",
  age: 15,
};

const obj2 = { ...obj, status: false, age: obj.age + 1 };
console.log(obj2);

// ovo je kopiranje/kopiranje i menjanje istog-a.

// Constructor function for Objects:

// mora preko function a ne arrow function

function User(firstname, lastname, score) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.score = score;
}

const nikola = new User("Nikola", "Bozovic", 4);
console.log(nikola);
// svi objekti u javascriptu su povezani sa nekim Prototype Objektom.Tako da mozemo reci da svaki objekat ima Prototype.
// Prototype je objekat koji sadrzi odredjena svojstva i metode.

User.prototype.incrementScore = function () {
  this.score += 1;
};

nikola.incrementScore();
console.log(nikola);

// pravljenje objekata preko new keyword.
const object3 = new Object({
  name: "Aladin",
  age: 19,
});
