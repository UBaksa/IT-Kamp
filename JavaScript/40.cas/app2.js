// OBJEKTI //

// Objekti su glavna stvar u JavaScript_u.

const niz = ["Amer", "Bakir", "Aladin"];
//             0       1          2

// Objekti su promenljive koje sadrze vise vrednosti.
// Predstavljaju se u key:value(negde pise i name value)parovima.

const person = {
  firstName: "Nikola",
  lastName: "Bozovic",
  age: 18,
  adult: true,
};
console.log(person);

// Pristupanje odredjenim vrednostima objekata mozemo izvrsiti na 2 nacina:
// Jedan key:value par se zove property(svojstvo).

//1.objectName.propertyName-(person.firstName);

//2.objectName["propertyName"]-(person[firstName]);

console.log(person.firstName);
const punoletnost = person.adult === true ? "jeste" : "nije";
console.log(`${person["firstName"]} ${punoletnost} punoletna`);

// / / OBJECT METODE / / //

// Objekti takodje mogu imati metode.
// Metode su funkcije koje ce se izvrsiti na objectu.
// Metode su skladistene u svojstvima kao definicija funkcija.

const person2 = {
  firstName: "Alen",
  lastName: "Muslic",
  age: 17,
  adult: false,
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person2.fullname());

// u JavaScriptu this je keyword(rezervisana rec) koja ukazuje na neki objekat.
// this nije promenljiva i ne mozemo promeniti vrednost this-a.

// this ukazuje na razlicit objekat u zavisnosti od toga gde se koristi.

// * U nekom objektu this ukazuje na taj objekat.
// *U global scope this ukazuje na global object.

function slova(str) {
  let novi = [];
  for (i = 0; i < str.length; i++) {
    for (k = i; k < str.length; k++) {
      subStrArr.push(str.slice(i, k + 1));
    }
  }
}
console.log(slova("dog"));
