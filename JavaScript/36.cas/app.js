// filter() metoda kreira novi niz sa onim elementima koji su prosli test.
// Novodobijeni niz moze imati maksimalno elemenata kao niz na koji se primenjuje metoda.Takodje moze biti prazan niz.

const godine = [19, 17, 20, 17, 16, 15, 19, 20];
const punolenti = godine.filter(function (element) {
  return element > 17;
});
console.log(punolenti);

// kod filter metode se if ubacuje u return,nema pre returna funkcija!!!

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima starog niza gde je drugo slovo "e".

const niz = [
  "Bakir",
  "Haris",
  "Amer",
  "Dzenan",
  "Hasan",
  "Aladin",
  "Merisa",
  "Emin",
  "Alen",
];
const novi = niz.filter(function (element) {
  return element[1] === "e";
});
console.log(novi);

// Napraviti novi niz koji filtrira postojevi i vraca novi sa onim elementima cija je duzina <=6.

const novi1 = niz.filter(function (element) {
  return element.length <= 4;
});
console.log(novi1);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elemntima ciji je tip "boolena."

const newArr = ["Rec", "Dve RECi", 26, true, false, [true, false], 49, true];
const novi2 = newArr.filter(function (element) {
  return typeof element === typeof true;
});
console.log(novi2);

// Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti :
// novi uz ispunjenje uslova:
// value > 2 return vrednosti*7
// value > 2 and 8 - return value*2;
// Ostale vrednosti da ne uzima u obzir;
// I na kraju treba novi niz vratiti sa godinama <10.

const niz3 = niz.filter(function (element) {
  return element > 2;
});
const niz4 = niz3.map(function (element) {
  if (element < 8) {
    return element * 2;
  } else if (element > 2 && element > 8) {
    return element * 7;
  }
});
const novi5 = niz4.filter(function (element) {
  return niz4;
});

// reduce() metoda vraca jednu vrednost.Iteracija se vrsi kroz ceo niz.

// Sabrati sve elemente niza:

// ova metoda uziam dva parametra,previousValue i currentValue.
const zbirGodina = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(zbirGodina);

// Dodati pocetnu vrednost 350;
const iznos = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  350
);
console.log(iznos);

// na niz godine da se vrati prosecna starost godina.

const prosek = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(prosek / godine.length);

// Write a function that converts an array of values from miles to kilometres using the map method.
// In the end,add the kilometres up in a new variable called "totalDistanceKilometers" and return this variable.

const miles = [55, 78, 140, 121, 96, 100, 67];
const kilometers = miles.map((previousValue) => previousValue * 1.6);
const kilometerss = kilometers.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
});
console.log(kilometerss);

const arra1 = [1, 0, 2, 3, 4];
const arra2 = [3, 5, 6, 7, 8, 13];

function dodavanje(par1, par2) {
  const duzina = par1.length > par2.length ? par1.length : par2.length;
  const novii = [];
  for (i = 0; i < duzina; i++) {
    if (par1[i] === undefined) {
      novii.push(par2[i]);
    } else if (par2[i] === undefined) {
      novii.push(par1[i]);
    } else {
      novii.push(par1[i] + par2[i]);
    }
  }
  return novii;
}
