// Napraviti funckiju koja vraca najveci element niza.(2 nacin.).
// DOMACI:Ovo isto samo za minimum.
const niz = [-5, 6, 10, 45, 99, -44];

// II Nacin.

// pomocu apply metode//

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

// indexOf() metoda nam vraca poziciju elementa koji predstavlja argument date metode.
// Ako ne nadje taj element koji je index tjst ako ga nema vraca -1.

const nizz = ["Hatida", "Bakir", "Amer", "Bakir", "Alen"];

const bakir = nizz.indexOf("Bakir");
console.log(bakir);

const omar =
  niz.indexOf("Omar") === -1 ? "nije dolazio" : niz.indexOf("Omar") + 1;

console.log(omar);
// Drugi argument predstavlja poziciju od koje trazimo.
const hatidza = nizz.indexOf("Hatidza", 1);
console.log(hatidza);

// Ako ima vise istih elemenata,na koji prvi naidje izbacuje njegovu vrednost.

// lastIndexOf() metoda vraca poziciju elementa koji predstavlja argument date metode.
// lastIndexOf() metoda vraca -1 ako se neki element ne nalazi u nizu.
const lastBakir = nizz.lastIndexOf("Bakir");
console.log(lastBakir);

// Array.from() nam vraca niz,koji se pravi od nekog objekta koji ima length.

const noviNiz = Array.from("SVAKO SLOVO CE BITI ELEMENT NIZA");
console.log(noviNiz);

// includes() metoda nam vraca boolean u zavisnosti od toga da li se argument nalazi u nizu.

console.log(nizz.includes("Emin"));

// keys() metoda vraca Array Iterator Object sa kljucevima (indeksima) nekog niza.

const indeksi = nizz.keys();

console.log(indeksi);

for (let index of indeksi) {
  console.log(index);
}

// entries() metoda vraca Array Iterator Object sa key/value parovima nekog niza.

const entries = nizz.entries();
console.log(entries);

for (let pair of entries) {
  console.log(pair);
}

// Write a javascript function to get the first element of an array.Passing a parameter "n" will return the first n elements of the array.

// definise se nizzz nego je mucnoooo

function slanje(nizzz, n) {
  if (n > nizzz.length) {
    return nizzz;
  } else if (n === undefined) {
    return niz[0];
  } else {
    return niz.slice(0, n);
  }
}
