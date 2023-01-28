// JS objekti su mutable (promenljivi) //

const Dzenan = {
  ime: "Dzenan",
  prezime: "Mecinovic",
  godine: 19,
};

const dzenan2 = Dzenan;
console.log(dzenan2);
dzenan2.prezime = "Kosuta";
dzenan2.godine = 26;

console.log(dzenan2);
console.log(Dzenan);

// brisanje svojstava iz objekta:

const person = {
  ime: "Mitar",
  prezime: "Vranic",
  godine: 20,
  skola: "Reuda Vildan",
};
console.log(person); //delete keyword se koristi za brisanje elementa
//delete obj.property brise i key i value
delete person.skola;
console.log(person);

// delete mitar["skola"]-drugi nacin

// Napomena.
// Vrednosti nekog objekta mogu biti:
// Objekti
// Nizovi
// Funkcije...

// Konvertovanje objekta u niz:
// Object.values(obj)
const niz = Object.values(person);
// Dodavanje svojstava:
person.punoletnost = true;
console.log(person);
