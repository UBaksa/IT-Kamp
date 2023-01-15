// Domaci:
// 1. Pomocu for petlje napraviti novi niz, koji ce sadrzati samo godine vece od 17.

// 2.
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

// 1. Pomocu for petlje napraviti novi niz, koji ce sadrzati samo godine vece od 17.
const niz = [4, 5, 30, 25, 18, 20];
const novi = [];
for (let i of niz) {
  if (i < 17) {
    continue;
  } else {
    novi.push(i);
  }
}
console.log(novi);

// 2.
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

function drugi(par1, par2) {
  const novi = par1.concat(par2);
  const novi2 = [];
  for (let i of novi) {
    if (i % 2 === 0 && typeof i === typeof 1) {
      novi2.push(i);
    }
  }
  let novi3 = novi2.map(function preslikavanje(element) {
    return element;
  });
  novi3.unshift(10, 20);
  return [novi2, novi3];
}

console.log(drugi(DATA1, DATA2));
