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
  language: "",
  setLanguage: function (jezik) {
    if (typeof jezik !== typeof "abcd") {
      return "Morate uneti jezik!!";
    } else if (this.language === jezik) {
      return "Vec ste uneli jezik koji znate!";
    } else {
      return (this.language += "," + jezik);
    }
  },
  setNickName: function (firstName, lastName) {
    let nadimak = "";
    nadimak += this.firstName.slice(0, 2);
    nadimak += this.lastName.slice(0, 2);
    return nadimak.toUpperCase();
  },
};
objekat.setLanguage("Engleski");
console.log(objekat);
objekat.setLanguage("Engleski");
console.log(objekat);
objekat.setLanguage("Srpski");
console.log(objekat);
