// splice() metoda je najmocnija alatka kod nizova u JavaScriptu.
// Omogucava nam promene u nizu na zeljenoj poziciji.
// 1.Mozemo dodati (koliko hocemo) elemenata na nekom mestu;
// 2.Mozemo izbrisati (koliko hocemo) elemenata na nekom mestu;

const niz = [
  "Dzenan",
  "Bakir",
  "Amer",
  "Aladin",
  "Haris",
  "Merisa",
  "Hatidza",
  "Alen",
  "Emin",
  "Hamed",
  "Miona",
];
// iako je sa const definisan,moze da se menja redosled elemenata u nizu pomocu metoda ali ne i da se dodaju/odizimaju elementi.

// splice() metoda uzima minimum 2 argumenta:
// Prvi argument predstavlja poziciju od koje ce se vrsiti neke promene;
// Drugi argument predstavlja broj elemenata koje brisemo.
// niz.splice(2, 6);
console.log(niz);
console.log(typeof niz[5]);

// Treci argument predstavlja vrednost koja ce se dodati na mestu koje smo definisali prvim argumentom.
// niz.splice(2, 0, "Tarik");

//Iz niza izbrisati sve devojke;
//Iz niza izbrisati sve muskarce;
//Na  petom elementu dodati Tarika,a na kraju niza dodati Omar;

// za devojke

// niz.splice(4, 2);
// console.log(niz);
// niz.pop();
// console.log(niz);

// za muskarce

// niz.splice(0, 5);
// console.log(niz);
// niz.splice(2, 3);
// console.log(niz);

// za tarika.

// niz.splice(4, 0, "Tarik");
// console.log(niz);
// niz.push("Omar");
// console.log(niz);

// kad se console loga npr splice(3,3),console.log nam vraca te izbirsane elemente.

// slice() metoda nam vraca deo niza:

niz.slice(3, 5);
console.log(niz);

const skraceniNiz = niz.slice(3, 5);
console.log(skraceniNiz);
// Izostavljanjem drugog argumenta kod slice metode se uzima ostatak niza.
const skraceniNiz2 = niz.slice(5);
console.log(skraceniNiz2);
