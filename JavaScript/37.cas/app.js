// U fibonacijevom nizu vrednosti ne prelaze 4 miliona,pronaci sumu parnih elemenata.

// Fibonacijev niz je sastavljen na nacin da je element jednak zbiru prethodna dva elementa.

const niz = [1, 1];
let i = 2;
while (niz[i - 1] + niz[i - 2] < 4000000) {
  niz.push(niz[i - 1] + niz[i - 2]);
  i++;
}
console.log(niz);
const niz2 = niz.filter(function (element) {
  return element % 2 === 0;
});
console.log(niz2);
const niz3 = niz2.reduce(function (par1, par2) {
  return par1 + par2;
});
console.log(niz3);

// Broj palindrom se cita isto sa obe strane.Najveci palindrom napravljen od proizvoda dva dvocifrensa broja je 9009 = 91x99;
// Pronaci najveci palindrom napravljen od proizovda dva trocifrena broja.
// function ispalindrom(broj) {
//   const strBroj = broj.toString();
//   let newStrBroj = "";
//   for (let i = strBroj.length - 1; i >= 0; i++) {
//     newStrBroj += strBroj[i];
//   }
//   if (strBroj === newStrBroj) {
//     return true;
//   } else return false;
// }
// console.log(ispalindrom(55));

// function maxPalindrom() {
//   const niz = [];
//   for (i = 100; i < 1000; i++) {
//     for (k = i; k < 1000; k++) {
//       if (ispalindrom(i * k && !niz.includes(i * k))) {
//         niz.push(i * k);
//       }
//     }
//   }
// }
// console.log(maxPalindrom())

// 2. nacin

function isPalindrom2{
    for(i = 999;i>99;i--){
        for(k=i;k>99;k--){
if(isPalindrom(i*k)){
    return i*k;
}
        }
    }
}
console.log()

// KOD DZENA NA GITHUB DA SE POGLEDA.