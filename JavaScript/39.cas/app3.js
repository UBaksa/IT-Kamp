// flat() metoda se koristi kada unutar niza imamo element koji je niz,i zelimo da sve podelemente izvucemo na nacin da oni predstavljaju elemente glavnog niza.

const niz = [
  ["jabuka", "ananas", "jagoda", "kruska"],
  ["krompir", "luk", "paradajz"],
  ["pite", "razna jela"],
];

const niz2 = niz.flat();
console.log(niz2);

var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

// function zadatak(niz) {
//   let novi = "";
//   for (let i = 0; i <= niz.length; i++) {
//     if (Array.isArray(niz[i]) === true) {
//       let primer = niz[i].flat();
//       novi += "row ${i}" + toString(primer);
//     } else {
//       continue;
//     }
//   }
//   return novi;
// }
// console.log(zadatak(a));

function tenthTask(arr) {
  let outputStr = "";
  for (let i = 0; i < arr.length; i++) {
    outputStr += `row ${i}\n`;
    for (let k of arr[i]) {
      outputStr += `${k} \n`;
    }
  }
  return outputStr;
}

console.log(tenthTask(a));

// zadatak za proveru prestupnih godina!!!!
function leapyears(from, to) {
  const leapYears = [];
  for (let i = from; i <= to; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      leapYears.push(i);
    }
  }
  return leapYears;
}

console.log(leapyears(2000, 2012));
