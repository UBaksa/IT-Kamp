// 1. var
var x; // deklarisanje promenljive x(obezbedjivanje lokacijske memorije za promenljivu x)
x = 15; //inicijalizacija promenljive x odnosno dodela vrednosti vec deklarisanoj promenljivoj x
// var x = 15 - takodje dozvoljeno i ovo se primenjuje zbog memorije!!!!!!
// ova var x = 15 su 2 i 3 linija koda zajedno
console.log(x);
var x = 22;//redeklarisanje prvomenljive x definisane putem var keyword je dozvoljeno bilo gde u prostoru.
x = 22;//reinicijalizacija promenljive x definisane putem var keyword je dozvoljeno bilo gde u prostoru.


// 2. let - definisanje promenljive za koju postoji mogucnost promene vrednosti.
// let y = 14;-takodje dozvoljeno i primenjuje se zbog memorije!
let y;// deklarisanje promenljive y(obezbedjivanje lokacijske memorije za promenljivu y)
y = 14;//inicijalizacija promenljive y odnosno dodela vrednosti vec deklarisanoj promenljivoj y
console.log(y);

let a, b, c;//korektan nacin deklarisanja.

// redeklarisanje promenljive definisane putem let keyword nije dozvoljeno ako govorimo o istom prostoru
//let y;

// let reinicijalizacija promenljive definisane putem let keyword je dozvoljeno u bilo kom prostoru.

y = 12;
console.log(y);

//Promenljive koje su definisane putem let i const keyword nam obezbedjuju block scope.

{
// console.log(y);-prepoznaje se promenljiva iz global scope-a.
// redeklaracija unutar drugog prostora definisane putem let u drugom prostoru je dozvoljena.
let y = 19;
console.log(y);
}
console.log(y);
// ispisuje se 12,odnosno poslednje dodeljena vrednost unutar global scope-a.

// 3. const 

//NIJE DOZVOLJENA NI REDEKLARACIJA,NI REINICIJALIZACIJA.

// const z;
// z = 26;
// promenljive definisane putem const keyword moraju biti odjednom i deklarisane i inicijalizovane.
const z = 26;
console.log(z);

// const z = 23;
// kod const ne moze da se redeklarise i reinicijalizuje.(kada se radi o istom prostoru.)

// Sve karakteristike vaze i za promenljive definisane putem let i Block scope-u,vaze i za promenljive definisane putem const keyword.

// const cars = ["Audi","Golf","Mercedes","BMW","Nissan"];
// moze da se menja sadrzaj ali ne direktno putem inicijalizacije,vec na neki drugi nacin..
