// Sortiranje nizova.

const voce = ["jagoda", "banana", "kruska", "ananas", "jabuka"];

// sort() metoda nam sortira niz abecedno.

voce.sort();
console.log(voce);

// reverse() metoda sortira niz obrnutim redosledom(u odnosu na prethodno stanje).

// Ako zelimo sortiranje (Z-A) moramo prvo izvrsiti sort(),pa onda reverse().

voce.sort();
voce.reverse();
console.log(voce);

const brojevi = [24, 36, -5, 22, 45, 99, -99];

// brojevi.sort();
// console.log(brojevi);
// brojevi.reverse();
// console.log(brojevi);

// sort() metoda sama ne vrsi ispravno sortiranje kada se radi o brojevima.

// Za resavanje datog problema se koristi callback funkcija unutar sort metoda.

// Funckija koja se salje kao argument unutar neke druge funkcije se zove CALLBACK funkcija.
const brojevi2 = [21, 9, 1000];

function poredjaj(a, b) {
  return a - b;
}

brojevi2.sort(poredjaj);
console.log(brojevi2);

brojevi.sort((a, b) => a - b);
console.log(brojevi);

// Ako zelimo da nas niz sortira brojeve random.

brojevi.sort(() => 0.5 - Math.random());

console.log(brojevi);
