ww; // JavaScript Array Iteration//

// Array Iteration metode prolaze kroz svaki element niza.//

// forEach() metoda poziva callback funkciju za svaki element niza.

const niz = ["tarik", "hamed", "emin", "bakir", "dzenan"];
// forEach() moze imati 3 parametra:
// 1.element niza
// 2.index niza
// 3.ceo niz
niz.forEach((element) => {
  console.log(element);
});

niz.forEach((element, index, arr) => {
  console.log(
    `${element} se nalazi na ${index + 1} mestu u nizu.Ceo niz je ${arr}.`
  );
});

niz.forEach((student, pozicija) => {
  console.log(`${student} se nalazi na ${pozicija + 1} mestu u nizu.`);
});

// sve metode mogu imati 3 parametra.

// map() metoda kreira novi niz(iste duzine kao originalni!!!!) sa logikom predstavljenom unutar callback funkcije unutar  date   metode.

// Preko petlje napraviti novi niz koji ce imati sve elemente originalnog niza.

// function rotiranje(niz) {
//   let novi = [];
//   for (let i = 0; i < niz.length; i++) {
//     for (let j = i; j < niz.length; j++) {
//       if (niz[i] === niz[j]) {
//         novi.push(niz[i]);
//       } else {
//         continue;
//       }
//     }
//     return novi;
//   }
// }

// PITATI!

console.log(rotiranje(niz));

// const niz2 = [];

// for (let student of niz) {
//   niz2.push(student);
// }
// console.log(niz2);

// const niz3 = niz.map(function (student) {
//   return student;
// });

// const niz3 = niz3.map((student) => student);

// Preko map() metode  napraviti novi niz gde ce imena svih studenata pocinjati velikim slovom.

function veliko(niz) {
  const niz4 = niz.map((clan) => clan[0].toUpperCase() + clan.slice(1));
  return niz4;
}
console.log(veliko(niz));

// const brojevi = [-5,4,3,10,14,-5]

// 1.Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1),a pozitivne kvadrirati.DOMACI

// 2.
