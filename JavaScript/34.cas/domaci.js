// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.
// JavaScript/34. Cas/domaci.js

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

function treci {
    
}