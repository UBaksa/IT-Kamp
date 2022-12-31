// Niz predstavlja strukturu podataka koja moze sadrzati vise od jedne vrednosti.

// Nizovi u JavaScriptu su heterogeni,mogu vise tipova podataka da skladiste,npr number,string,null,undefined,boolean...
const niz = ["Mitar", "Vranic", 20, true];
console.log(niz);

// Dozvoljeno je,cesto i prakticnije pisati svaki element niza u novom redu.
// const niz = [
//     "Mitar",
//      "Vranic",
//      20,
//      true
// ];

// Mozemo prvo kreirati prazan niz,nakon toga dodavati rucno elemente.

const automobili = [];
automobili[0] = "Audi";
console.log(automobili);
automobili[5] = "Golf";
console.log(automobili);
console.log(automobili[3]);

// Istu sintaksu mozemo iskoristiti za promenu vrednosti elementa.

automobili[0] = "Mercedes";
console.log(automobili);

// Niz mozemo definisati na new keyword:

const niz2 = new Array("Hasan", "Omar", "Emin");
console.log(niz2);

// Radi jednostavnosti,citljivosti koda i brzine izvrsavanje je bolje koristiti [] nego new keyword.

const niz3 = [40];
console.log(niz3);
// new Array ce napraviti niz od 40 praznih mesta.
const niz4 = new Array(40);
console.log(niz4);

// Pristupanje elemenata se vrsi preko indexac
console.log(automobili[3]);

console.log(typeof automobili);

// Postoje 2 nacina za ispitivanje da li je neka promenljiva niz:
console.log(typeof automobili);

//1.Array.isArray(potencijalnoNiz)
console.log(Array.isArray(automobili));

//2. potencijalnoNiz instanceof Array

console.log(automobili instanceof Array);
console.log(25 instanceof Array);

// Elementi niza mogu biti bilo koje vrednosti:
// Date,Array,Boolean,number,string,Function...

// Za proveru duzine niza koristimo length
console.log(automobili.length);

// Za dodavanje elementa na kraju niza koristiti push()metodu.
