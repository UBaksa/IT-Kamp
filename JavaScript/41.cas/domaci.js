// Domaci zadatak:
// // Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

// 2. Zadatak
//  const radnik = {
//     firstName: "Dzenan",
//      lastName : "Kosuta",
//      fullname:function(){
//      },
//      adresa:{
//          ulica:"avnoja",
//          broj:"bb",
//          grad:"Novi Pazar",
//          getAdress:function(){
// vraca Dzenan Kosuta zivi u ulici Avnoja u Novom Pazaru.
//          }
//      }

// 3. Zadatak
// const automobil = {
//     marka: "Audi",
//     model: "Q7",
//     boja: "Bela",
//     pogon: "quattro",
//     menjac: "Automatik",
//     km:240000,
//     vlasnik:[062321552,063930630],
//     garaza:{
//         parking:"JKP Servis",
//         vikend:"od 17 free",
//         satnaKarta: "50",
//         dnevnaKarta: "200",
//         mesecnaKarta: "2000",
//         platiZa: function(od, do) {
//
// }
//     }
// }

// Domaci zadatak:
// 1) Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)
const objekat = {
  firstName: "Bakir",
  lastname: "Ujkanovic",
  language: [],
  setLanguage: function (jezik) {
    if (typeof jezik === typeof "abcd" && !this.language.includes(jezik)) {
      this.language.push(jezik);
    }
  },
  setNickname: function () {
    this.nickname = this.firstName.slice(0, 1);
    this.nickname = this.nickname.toUpperCase();
    this.nickname += this.firstName.slice(1, 2);
    this.nickname += this.lastname.slice(0, 2);
  },
};
objekat.setLanguage("Engleski");
console.log(objekat);
objekat.setNickname();
console.log(objekat);

// 2. Zadatak
const radnik = {
  firstName: "Dzenan",
  lastName: "Kosuta",
  fullname: function () {
    return `${radnik.firstName} ${radnik.lastName}`;
  },
  adresa: {
    ulica: "Avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      return `${radnik.fullname()} zivi u ulici ${radnik.adresa.ulica} ${
        radnik.adresa.broj
      } u ${radnik.adresa.grad}-u.`;
    },
  },
};
console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());

// 3. Zadatak
const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: [062321552],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (from, to) {
      const prvi = from.getTime();
      const drugi = to.getTime();
      const razlike = Math.abs(drugi - prvi);
      // 1000,60,60,24
      const brojDana = razlike / (1000 * 60 * 60 * 24);
      return `Vasa karta ce kostati ${brojDana * this.dnevnaKarta}`;
    },
  },
};

console.log(
  automobil.garaza.platiZa(new Date(2023, 0, 21), new Date(2023, 0, 26))
);
