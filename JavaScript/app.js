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
let skola;
console.log(typeof skola);
