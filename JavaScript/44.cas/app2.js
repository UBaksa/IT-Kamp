// Napraviti funkciju koja vraca novi niz, gde je svaki element objekat sa vrednostima title i budget.
const movies = [
  { title: "Inception", rating: 8, budget: "230M" },
  { title: "Interstelar", rating: 5, budget: "200M" },
  { title: "Godfather", rating: 9, budget: "280M" },
  { title: "Home Alone", rating: 4, budget: "300M" },
  { title: "Bad boys", rating: 8, budget: "180M" },
];

// const movies2 = movies.map(function (element) {
//   return {
//     title: element.title,
//     budget: element.budget,
//   };
// });
// console.log(movies2);

const movies2 = movies.map((element) => {
  return {
    title: element.title,
    budget: element.budget,
  };
});
console.log(movies2);

// function User(ime, prezime, starost, bojaociju, bojakose, polozenc) {
//   this.ime = ime;
//   this.prezime = prezime;
//   this.starost = starost;
//   this.bojaociju = bojaociju;
//   this.bojakose = bojakose;
//   this.polozenc = polozenc;
// }

// const niz = [];

// niz.push(User("Bakir", "Ujkanovic", 75, "plava", "plava", true));
// console.log(niz);

// Domaci:
// Napraviti niz objekata, gde ce svaki objekat sadrzati:
// ime, prezime, starost, bojaOciju, bojaKose, polozenC.
//  Napraviti funkciju koja pravi novi niz koji ce sadrzati one elemente cija boja ociju je braon i koji nisu polozili C.

const grupa = [
  {
    ime: "Mitar",
    prezime: "Vranic",
    starost: 20,
    bojaOciju: "plava",
    bojaKose: "plava",
    polozenC: false,
  },
  {
    ime: "Miona",
    prezime: "Vranic",
    starost: 21,
    bojaOciju: "plava",
    bojaKose: "plava",
    polozenC: true,
  },
  {
    ime: "Merisa",
    prezime: "Besirovic",
    starost: 18,
    bojaOciju: "braon",
    bojaKose: "plava",
    polozenC: true,
  },
  {
    ime: "Emin",
    prezime: "Zukanovic",
    starost: 19,
    bojaOciju: "braon",
    bojaKose: "crna",
    polozenC: false,
  },
  {
    ime: "Nikola",
    prezime: "Bozovic",
    starost: 18,
    bojaOciju: "zelena",
    bojaKose: "braon",
    polozenC: true,
  },
  {
    ime: "Haris",
    prezime: "Muslic",
    starost: 19,
    bojaOciju: "braon",
    bojaKose: "plava",
    polozenC: false,
  },
  {
    ime: "Aladin",
    prezime: "Zecic",
    starost: 19,
    bojaOciju: "braon",
    bojaKose: "smedja",
    polozenC: true,
  },
  {
    ime: "Bakir",
    prezime: "Ujkanovic",
    starost: 19,
    bojaOciju: "braon",
    bojaKose: "crna",
    polozenC: false,
  },
  {
    ime: "Amer",
    prezime: "Honic",
    starost: 19,
    bojaOciju: "braon",
    bojaKose: "smedja",
    polozenC: false,
  },
  {
    ime: "Dzenan",
    prezime: "Mecinovic",
    starost: 18,
    bojaOciju: "braon",
    bojaKose: "crna",
    polozenC: false,
  },
];

function noviniz(obj) {
  const nizz = [];
  for (let i = 0; i < obj.length; i++) {
    if (obj.bojaOciju === "braon" && obj.polozenC === true) {
      nizz.push(obj);
    }
  }
}
