document.getElementById("paragraf").innerHTML =
  "Ovo je paragraf koji je unet naknadno.";
// stringovi se oznacavaju pod navodnicima

paragraf = document.getElementById("paragraf");
// u css-u je bilo background-color/ovde je backgroundColor-veliko slovo za pocetak drugog dela taga umesto crte
paragraf.style.backgroundColor = "red";

console.log("Ovo je nas prvi ispis u konzoli.");

// Tipovi podataka u JavaScriptu //

// Za proveru tipa neke promenljive(varijable) se koristi typeof operator.

//  Primitivni tipovi podataka//

// 1.string-predstavljaju niz karaktera koji je zapisan unutar navodnika obicnih ili duplih

// 2.
console.log("Ovo je neki string koji je napisan unutar duplih navodnika");
console.log(
  typeof "Ovo je neki string koji je napisan unutar duplih navodnika"
);

// umesto ovih navodnika mogu i ove kvacice `//
console.log(`Ovo je neki string koji je napisan unutar duplih navodnika`);

// 2.number -  predstavlja broj,koji moze biti zapisan sa ili bez decimalnog zareza(ili tacke)
// ne pravi se razlikaizmedju celih,realnih i kompleksnih brojeva.
//brojevi se ne zapisuju unutar navodnika,i takodje u konzoli su brojevi ljubicasti a stringovi bele boje.
console.log(235);
console.log(typeof 235);

console.log(-5.67);
console.log(typeof -5.67);

// 3. BigInt - se koristi za skladistenje brojeva cija granica prelazi granicu number tip podatka.

console.log(BigInt(984328948925398589489514984219842198));
console.log(typeof BigInt(984328948925398589489514984219842198));

// 4. boolean - logicki entitet koji moze imati dve vrednosti :true ili false.
// najcesce se koristi u kondicionalina (if naredbe) i ima veliku primenu.
// prikazuju se kao i brojevi iste boje u kao number
console.log(true);
console.log(typeof true);

daLiPadaKisa = false;

console.log(daLiPadaKisa);

// 5. undefined - je tip podatka koji se javlja kada imamo deklarisanu neku promenljivu ali joj nismo dodelili vrednost.
// u tom slucaju i vrednost i tip promenljive je undefined.
let prom1; //deklarisanje promenljive
prom1 = 54; //inicijalizacija (dodela vrednosti) promenljive

// 6. null - je tip podatka nepostojecu promenljivu ili za promenljivu kojoj smo dodelili nekorektnu vrednost.
skola = null
console.log(skola)
console.log(typeof skola);

// 7.Symbol - novi tip podatka u javascriptu koji se koristi za dodeljivanje jedinstvene ili anonimne vrednosti.
x = Symbol("Danas je lepo vreme.")
console.log(x)
y = Symbol("Danas je lepo vreme.")
console.log(y)
// Svaki je simbol razlicit iako ima isti tekst,razliciti su !
console.log(x === y)

// Primitivni tipovi podataka se koriste kada imamo promenljivu,varijablu,sa samo jednom vrednoscu .


// Neprimitivni tipovi podataka //

// Za promenljive (varijable) koje mogu skladistiti vise vrednosti,ili neke kompleksne vrednosti se koriste neprimitivni tipovi podataka. //

// Kada ispitujemo tip podatka za neku neprimitivnu promenljivu u JavaScriptu dobijamo Object za tip.(type of)

// 1.Nizovi (Arrays)-neprimitivnitip podatka koji nam sluzi skladistenje vise vrednosti.
// U JavaScriptu niz moze sadrzati elemente razlicitog tipa.

niz1 = ["Mitar", "Dzenan","Haris" ,"Hamed", "Nikola"]
console.log(niz1)
niz2 = ["Hamed",15,false]
console.log(niz2)

// Jos jedan nacin definisanja tipa:
niz3 = new Array("Mitar", "Dzenan","Haris" ,"Hamed", "Nikola")
console.log(niz3)

// 2.Object- su glavni neprimitivni tipovi podataka u javascriptu.

// Nacin da prikazemo odredjene vrednosti ako pricamo osobi(gde prikazujemo svojstva-vrednosti coveka/object-a)

// Objekti se zapisuju ,po principu name:value pair (ime:vrednost par)

// sintaakse za objekt su { } zagrade
 object2 = new Object({
  ime:"Amer",
  prezime:"Honic",
  godine:19,
  skola:"DUNP",
  punoletnost:true,
 })
console.log(object2.skola)

obj1 = {
  ime:"Mehmed",
  prezime:"Kucevic",
  godine:15,
  skola:"Dva heroja",
  punoletnost:false,
}
// index kod niza je od 0 do beskonacno,a ovamo je kako ga imenujemo

console.log(obj1.skola);

// 3.Setovi (Sets)-slicni nizovima sa razlikom da set ne moze da zadrzi duplikate.

// setovi i mape se zapisuju putem NEW-a 
set1 = new Set(["Alen","Hasan","Miona","Amir","Alen"]) //nisu dozvoljeni publikati(iskuliraju se jednostavno)
console.log(set1)

// 4.Mape-su slicni Objectima sa nesto drugacijim nacinom definisanja.

map1 = new Map([
  ["jabuke",50],
  ["kruske",60],
  ["jagode",80],
])
console.log(map1)