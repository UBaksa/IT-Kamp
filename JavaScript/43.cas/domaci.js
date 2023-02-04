// Domaci:
const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: 50,
    dnevnaKarta: 200,
    mesecnaKarta: 2000,
  },
};
// Napraviti funkciju koja ce povecati vrednost satne, dnevne i mesecne karte za po 20%.
// Za bilo koji objekat koji ima properties: satnaKarta, dnevnaKarta i mesecnaKarta.
// Nakon toga je primeniti za automobil objekat i ispisati automobil nakon toga.

// function povecanjes(element) {
//   return (element.garaza.satnaKarta *= 1.2);
// }
// console.log(povecanjes(automobil));
// function povecanjednevne(element) {
//   return (element.garaza.dnevnaKarta *= 1.2);
// }
// console.log(povecanjednevne(automobil));
// function povecanjemesecne(element) {
//   return (element.garaza.mesecnaKarta *= 1.2);
// }
// console.log(povecanjemesecne(automobil));

function povezaj() {
  this.satnaKarta *= 1.2;
  this.mesecnaKarta *= 1.2;
  this.dnevnaKarta *= 1.2;
}
povezaj.call(automobil.garaza);
console.log(automobil);
