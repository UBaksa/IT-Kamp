// JSON - JavaScript object notation //

// JSON je format za skladistenje i prenos podataka.
// Najcesce se koristi kada se podaci salju sa servera ka WEB stranici.
// JSON podaci su vrlo slicni JavaScript objektu i oni se zapisuju:

// const person = {
//   // "firstName":"Amer",
//   // "lastName":"Honic",
//   // "age":19,
//   // razlika je jer sve ide pod navodnicima!
// };

// keys/names zahtevaju duple navodnike,za razliku od JavScript objekta.

const person = {
  firstName: "Amer",
  lastName: "Honic",
  age: 19,
};

// Dve metode za pretvaranje:
// 1.JSON.stringify();
// JSON.strigify() pretvara nas objekat u JSON format paJSON u string.
const strObject = JSON.stringify(person);
console.log(strObject);
// 2.JSON.parse();
// analizira se neki string i u slucaju mogucnosti pretvara objekat (nama citljiv podatak)
const obj = JSON.parse(strObject);
console.log(obj);
