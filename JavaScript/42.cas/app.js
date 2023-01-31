// Object built in Methods //

const person = {
  firstName: "Hamed",
  lastName: "Medjedovic",
  age: 16,
};

// Object.freeze(obj) metoda cini objekat nepromenljivim.
person.age = 17;
console.log(person);
// Object.freeze(person);
// person.age = 21;
// console.log(person);

// Object.seal(obj) cini objekat promenljivim s tim sto nema mogucnost dodavanja novih svojstava i metoda,kao i brisanje istih.
// Object.seal(person);
// person.age = 22;
console.log(person);
// delete person.age;
// console.log(person);

// Object.keys(obj) vraca niz kljuceva:
console.log(Object.keys(person));

// Object.entries(obj) vraca niz nizova:
// Svaki podniz je niz od dva elementa:
const entries = Object.entries(person);
console.log(entries);
const niz = entries.flat().filter(function (element) {
  return typeof element === typeof "abc";
});
console.log(niz);

// Objectis(obj1,obj2),posto je referentni tip podatka on daje true samo ako se const da je obj1=obj2 ili 3,jer on ne gleda sta je untuar objekta iako su isti elemnti!!!!!!

const obj1 = {
  firstName: "Mitar",
  lastName: "Vranic",
};
const obj2 = {
  firstName: "Mitar",
  lastName: "Vranic",
};
const obj3 = obj1;
console.log(Object.is(obj1, obj3));

const ime = "Bakir";
const prezime = "Ujkanovic";
const godine = 19;

const person2 = {
  ime,
  prezime,
  godine,
};
console.log(person2);

// Destructuring
const person3 = {
  firstName: "Hasan",
  lastName: "Mujanovic",
  age: 18,
};
// const firstName = person3.firstName;
// console.log(firstName);
const { firstName, age } = person3;
console.log(firstName);
console.log(age);

const godine1 = [
  { starost: 19 },
  { starost: 19 },
  { starost: 118 },
  { starost: 19 },
  { starost: 19 },
  { starost: 16 },
  { starost: 18 },
  { starost: 14 },
  { starost: 17 },
];

const punoletnost = godine1.filter(function (element) {
  return element.starost > 17;
});
console.log(punoletnost);

const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
const novi = [];
const { title, author, libraryID } = library;
const titles = title.toString().sort();
const authors = author.toString().sort();
const librarys = library.toString().sort();
console.log(titles);
