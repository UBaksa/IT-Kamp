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
