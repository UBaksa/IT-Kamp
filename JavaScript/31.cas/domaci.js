// Domaci:
// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na parnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [2,4,6,8,10,12,14]
// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)
// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)
// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)

// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na parnim mestima unutar originalnog niza.
const nizz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function prvi(niz) {
  let noviniz = [];
  for (let i = 1; i < niz.length; i += 2) {
    noviniz.push(niz[i]);
  }
  return noviniz;
}

console.log(prvi(nizz));
// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)

function drugi(niz) {
  let noviniz = [];
  for (let broj of niz) {
    if (broj % 2 === 0) {
      noviniz.push(broj);
    }
  }
  return noviniz;
}
console.log(drugi(nizz));
// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)

function treci(niz) {
  let noviniz = [];
  for (let broj of niz) {
    if (broj % 2 !== 0) {
      noviniz.push(broj);
    }
  }
  return noviniz;
}
console.log(treci(nizz));

const nizzz = [1, -5, 14, -23, 17, 55, -100];
// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)
