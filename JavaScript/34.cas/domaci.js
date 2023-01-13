// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

////////////////////////////////////

// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

const niz = ["Velika slova moraju sva biti."];

function prvi(niz) {
  const velika = niz.map((clan) => clan.toUpperCase());
  return velika;
}

console.log(prvi(niz));

// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:

const brojevi = [-5, 4, 3, 10, 14, -5];

function drugi(brojevi) {
  const nizkvadrat = brojevi.map((clan) => clan * clan);
  return nizkvadrat;
}
console.log(drugi(brojevi));

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

function treci(niz) {
  const nizkoren = brojevi.map((clan) => Math.sqrt(Math.abs(clan)));
  return nizkoren;
}
console.log(treci(niz));

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

function cetvrti(brojevi) {
  const noviniz = [];
  for (let i of brojevi) {
    if (i < 0) {
      noviniz.push(Math.abs(i));
    } else if (i > 0) {
      noviniz.push(Math.pow(i, 2));
    }
  }
  return noviniz;
}

console.log(cetvrti(brojevi));

// II Nacin

function vecamanja(clan) {
  if (clan < 0) {
    return Math.abs(clan);
  } else {
    return Math.pow(clan, 2);
  }
}

function cetvrta(brojevi) {
  const niznovi = brojevi.map(vecamanja);
  return niznovi;
}
console.log(cetvrta(brojevi));
