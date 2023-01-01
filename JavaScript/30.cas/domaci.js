// Iz datog niza ispitati koliko elemenata je tipa string,
// koliko tipa number,
// koliko tipa boolean,
// koliko elemenata je zapravo niz?
const nizz = [
  "jagoda",
  25,
  true,
  "mandarina",
  [1, 2, 3],
  "ananas",
  49,
  694,
  "tresnja",
];
let stringg = 0;
let numberr = 0;
let booleann = 0;
for (let i = 0; i <= nizz.length - 1; i++) {
  if (typeof nizz[i] == "string") {
    stringg++;
  } else if (typeof nizz[i] == "number") {
    numberr++;
  } else if (typeof nizz[i] == "boolean") {
    booleann++;
  }
}
let duzina = nizz.length;
console.log(
  "Ima " +
    stringg +
    " " +
    "stringa," +
    numberr +
    " " +
    "numbera," +
    " " +
    booleann +
    " " +
    "boolean elemenata."
);
console.log("Niz ima " + duzina + " " + "elemenata.");
