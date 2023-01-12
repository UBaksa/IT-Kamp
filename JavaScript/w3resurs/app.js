// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// function vecimanji(a, b) {
//   return b - a;
// }

// function slanje(niz, n) {
//   niz.sort(vecimanji);
//   if (n > niz.length) {
//     return niz;
//   } else if (n === undefined) {
//     return niz[0];
//   } else {
//     return niz.slice(0, n);
//   }
// }

// console.log(slanje(niz, 7));

// 8. Write a JavaScript program to find the most frequent item of an array.

// const niz = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9, 9, 9, 9, 9];

// let poj = 1;
// let puta = 0;
// var item;
// for (let i = 0; i < niz.length; i++) {
//   for (let k = i; k < niz.length; k++) {
//     if (niz[i] === niz[k]) {
//       puta++;
//     }
//     if (poj > puta) {
//       poj = puta;
//       item = niz[i];
//     }
//   }
//   puta = 0;
// }

// console.log(item + " " + puta);
