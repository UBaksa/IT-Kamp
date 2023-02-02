const amer = {
  firstname: "Amer",
  lastname: "Honic",
  age: 19,
  fullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};
const emin = {
  firstname: "Emin",
  lastname: "Zukanovic",
  age: 19,
};

// Pozivanje neke funkcije za odredjeni objekat se moze izvrsiti pomocu funkcija:

// 1.call();
// 2.apply();
// 3.bind();

//Prvo treba pristupiti funkciji,pa onda objasniti na kom se objektu treba primeniti.

console.log(amer.fullname.call(emin));

// 2.Primer

const restoran1 = {
  hrana: "Spaghetti",
  gosti: "Veoma zadovoljni",
  lokacija: "Stevana Nemanje,64",
  mesto: "Novi Pazar",
  drzava: "Srbija",
};

const restoran2 = {
  hrana: "Burek",
  gosti: "Zgadjeni",
  lokacija: "Stanice Spasojevic,62",
  mesto: "Sarajevo",
  drzava: "Bosna i Hercegovina",
};
function poruka(mesto, drzava) {
  return `Vecerasnji specijalet u nasem restoranu je bio ${this.hrana}.Nasi gosti su ${this.gosti},te smo srecni zbog toga.\nNalazimo se u ulici ${this.lokacija},${mesto},${drzava}.`;
}
// call() metoda za prvi argument ima objekat na koji se primenjuje,ostali argumenti metode koja se izvrsava.

console.log(poruka.call(restoran1, "Novi Pazar", "Srbija"));

// apply() metoda za prvi argument ima objekat na koji se primenjuje,drugi argument je niz gde smestamo argumente metode koja se izvrsava.

console.log(poruka.apply(restoran2, ["Sarajevo", "Bosna"]));

// bind() zahteva prethodno definisanje promenljive (funkcije) za odredjeni objekat,pa onda pozivanje funkcije sa eventualnim argumentima.

const bindFunction = poruka.bind(restoran1);
console.log(bindFunction("Novi Sad", "Srbija"));
