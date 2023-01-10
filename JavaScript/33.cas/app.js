// Napraviti funckiju koja vraca najveci element niza.(2 nacin.).
// DOMACI:Ovo isto samo za minimum.
const niz = [-5, 6, 10, 45, 99, -44];

// II Nacin.

// pomocu aply metode//

Math.max(niz);

console.log(Math.max.apply(null, niz));

// III nacin.

function maxEl(niz) {
  let max = niz[0]; //ili se uzima minus beskonacno,odnosno najmanji broj u javascriptu.(Number.NEGATIVE_INFINITIVE)
  for (let broj of niz) {
    if (broj > max) {
      max = broj;
    }
  }
  return max;
}
console.log(maxEl(niz));
