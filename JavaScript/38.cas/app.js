// Array iteration metode-2 deo.

// every() metoda proverava da li su svi elementi iz niza zadovoljili uslov.
// every() metoda vraca boolean-true ili false.

// da li su svi u grupi punoletni?
const godine = [16, 19, 18, 19, 15, 17, 21, 20, 17];
const isEveryAdult = godine.every(function (element) {
  return element > 17;
});
console.log(isEveryAdult);

const niz = [
  "Tarik",
  "Bakir",
  "Haris",
  "Aladin",
  "Mehmed",
  "Hatidza",
  "Hasan",
  "Miona",
  "Mitar",
];

const niz1 = niz.every(function (element) {
  return element.length > 4;
});

console.log(niz1);

// some() metoda proverava da li bar jedan element niza zadovoljava uslov.
// some() metoda vraca boolean.

const niz2 = niz.some(function (element) {
  return element.length === 8;
});
console.log(niz2);

function duzina(par1) {
  for (let i = 0; i <= par1.length; i++) {
    if (par1[i].length === 7) {
      return true;
    }
  }
  return false;
}
// ako se ne zadovolji uslov,koji je petlji,ona ce da vrti vrti i ako ne nadje dace false,tako da treba else van petlje da se nadje u funkciji!!!!!!!!!
console.log(duzina(niz));

// find() metoda vraca vrednost prvog elementa koji je prosao test funkcije.
const brojevi = [4, 9, 16, 25, 29];

// Koji je prvi element niza veci od 18;

const brojevi2 = brojevi.find(function (element) {
  return element > 18;
});
console.log(brojevi2);

// Ako nijedan element nije zadovoljio uslof find metoda vraca UNDEFINED!!!!!!!

// findIndex() metoda vraca index prvog elementa koji je zadovoljio uslov.
// Ako nijedan element nije zadovoljio uslov findIndex metoda vraca -1.

const firstIndex = brojevi.findIndex((br) => br > 30);
console.log(firstIndex);

const nestoPojmanemam = Array.from("ABCDE");
console.log(nestoPojmanemam);

// Write a JavaScript program to remove duplicate items from an array(ignore case sensitivity);

// kod dzena da se vidi ovaj zadatak...

// We have the following arrays : go to the editor
color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

o = ["st", "nd", "rd", "th"];

// Write a JavaScript program to display the colors in the folowing way:
// 1st choice is blue;
// 2nd choice is green,
// 3rd choice is red.

function boje(par1, par2) {
  const novi = [];
  const duzina = par1.length > par2.length ? par1.length : par2.length;
  for (let i = 0; i < duzina; i++) {
    if (par1[i] === undefined) {
      novi.push(i + 1 + "th" + " " + "is" + par2[i]);
    } else {
      novi.push(i + 1 + par1[i] + " " + "is" + par2[i]);
    }
  }
  return novi;
}

console.log(boje(o, color));
