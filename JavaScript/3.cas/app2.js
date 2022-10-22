// OPERATORI U JAVASCRIPTU //
//Podelicemo operatore u 6 grupa.

// 1.Aritmeticki operatori.(Aritmetic operators)
// 2.Operatori dodele vrednosti(Assigments operators)
// 3.String operatori(String operators)
// 4.Operatori poredjenja (Comparison operators)
// 5.Logicki operatori(Logical operators)
// 6.Tip Operatori (Type operators.)

// 1.Aritmeticki operatori.(Aritmetic operators)
// 1.1 + operator sabiranja
console.log(4 + 5);
// 1.2 - -  operator oduzimanja
console.log(4-5);
// 1.3 - * operator mnozenja
console.log(4*5)
// 1.4 - / operator deljenja
console.log(20/5)
//1.5 - ** operator stepenovanja 
console.log(2 ** 3)//2 je osnova a 3 je stepen
// 1.6 - % operator za ostatak pri deljenju - Modulo/moduo
console.log(11 % 3)//2
console.log(12 % 3 )//0

// Uslov za parnost:
// i % 2 = 0
// Uslov za neparnost
// i % 2 = 1
// 1.7 - ++ increment (povecava vrednost za 1)

let t = 5
t++ // x = x + 1
// nakon 33 linije koda kad se bude koristilo t u console log odma ce bit 6 i unosimo samo t
console.log(t)

let o = 11
// prefiksni operator
console.log(++o)
// ovo je odma da bude
// 1.8 - -- decrement (smanjuje vrednost za 1)
 let m = 99
 m-- // z=z-1
 console.log(m)
//  prefiksni operator
let w = 65
console.log(--w)

// 2. Operatori dodele vrednosti (Assigment operators);

// 2.1 =- dodeljivanje vrednosti nekoj promenljivoj

// 2.2 += - dodavanje odredjene vrednosti na postojecu promenljivu

w +=  5;// w = w+ 5
console.log(w)

// 2.3 -= = oduzimanje odredjene vrednosti na postojecu promenljivu

m -= 3;
console.log(m);

//2.4 *= - mnozenje oredjene vrednosti na postojecu promenljivu;

m *= 2;
console.log(m);

//2.5 /= deljenje odredjene vrednosti na postojecu promenljivu

m /= 3;
console.log(m);

//2.6 %= modul oredjene vrednosti na postojecu promenljivu

//x=6

x %= 2;
console.log(x);


// 2.7  **= modul oredjene vrednosti na postojecu promenljivu

y **= 2;
console.log(y)





// 3.String operatori (String operators)

// Jedan od nacina za spajanje stringova je koriscenjem + operatora

let prviDeo = "Danas je Omar"
let drugiDeo = "doneo pizzu."
console.log(prviDeo + " " + drugiDeo)
console.log(Boolean(prviDeo + " " + drugiDeo));

// Neki slucajevi kod sabiranja;

console.log("Omar" + 3); // rezultat spajanja stringa i brojeva je uvek string!
console.log(3 + "Omar");

console.log(typeof(3 + "Omar"))
// bez obzira sto 2 moze biti pretvorena u korektan broj,nece se izvrsiti sabiranje
console.log(3 + "2")
// Javascript ce pokusati da prevede string u broj i da izvrsi racunsku operaciju
console.log(4-"2")//2
console.log(4*"2")//8
console.log("3" / 1)//3
console.log(2 ** "3")//8
//Ako JavaScript ne uspe da prevede string u broj,rezultat ce biti NaN
console.log(21 / "7dana")//NaN (Not a number) vrednost za nekorektan broj

// 4.Operatori poredjenja(Comparison operators);

// 4.1 == -Provera jednakosti vrednosti 

let k = 5;
let p = 7;
let i  = k;

console.log(k == i)
console.log(k == p)

i += 2

console.log(i)//ima novu vrednost 7
console.log(k)// ostaje na staru vrednost 5

//4.2 === - provera jednakost tipa i jednakost vrednosti 

let q = 7
console.log(q == p)
console.log(q === p)// za 3 jednaka,bice true samo ako su isti tip,nema veze sto su iste vrednosti

// 4.3 != - proverava razlicitost vrednosti 

console.log(p != i)

// 4.4 !== = ispituje da li je razlicita vrednost ILI razlicit tip/dovoljno samo da je jedno razlicito i dobijamo true!

console.log(k !== i)

// 4.5 > - da li je prva vrednost veca od druge:

console.log(k > i)

//4.6 < da li je prva vrednost manja od druge

console.log( 14 < -19)

//4.7 >= da li je prva vrednsot veca ili jednaka od druge

console.log(9>=9)

//4.8 <= da li je prva vrednost manja ili jednaka od druge
console.log(9 <= 33)

// 4.9 ? - ternarni operator

// uslov ? (radnja koja se izvrsava ako je uslov zadovoljen): (radnja koja se izvrsava ako uslov nije zadovoljen )

let isSunny = false 

isSunny ? console.log("Vreme je suncano" + "Ponesite naocare!" ) : 
console.log("Vreme je kisovito" + "Ponesite kisobran")


// 5. Logicki operator (Logical operators);

//&& - and (i) - zahteva zadovoljavanje svih uslova 

let prom1 = 4
let prom2 = 19
let prom3 = -3

prom1 > 0 && prom2>0 && prom3 > 0 
? console.log("Sve tri promenljive su pozitivni brojevi")
: console.log("Neke promenljive nisu pozitivne.")

//5.2 || or (ili) - zahteva zadovoljavanje bar jednog od ponudjenih uslova

let prva = 10
let druga = 15
let treca = -5

prva > 0 || druga > 0 || treca > 0 
? console.log("Nasli smo bar jednu promenljivu vecu od 0")
: console.log("Nema promenljive")

//5.3 ! - not - (okrece vrednost => iz true u false i obratno )

console.log(!Boolean(prviDeo + " " + drugiDeo));
