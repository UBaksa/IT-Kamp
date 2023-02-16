const recenica2 =
  "Danas su cetvrtfinala svetskog prvenstva u fudbalu,danas je takodje bila dodela sertifikata.";

console.log(recenica2.match("danas"));

// Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi). Npr. 'anavolimilovana' je palindrom.

function isPalindrom(rec) {
  let novaRec = "";
  // Pravljenje obrnutog stringa:
  for (let i = rec.length - 1; i >= 0; i--) {
    novaRec += rec[i];
  }
  if (rec === novaRec) {
    return "Data rec jeste palindrom.";
  } else {
    return "Data rec nije palindrom.";
  }
}

console.log(isPalindrom("obrnuto"));
console.log(isPalindrom("anavolimilovana"));

//DEFINICIJE//

// Postoji samo 8 FALSY vrednosti i one su:
// 1. False;
// 2. jedino je prazan string falsy,""
// 3. 0 je false,sve ostalo je pozitivno.
// 4.-0
// 5. 0n-npr 0*n.
// 6. undefined.
// 7. null.
// 8. NaN.

// Stringovi su immutable vrednosti (nepromenljive) sto znaci da ako hocemo neki slican string da dobijemo moramo napraviti novi 
// Postoje 3 metode za ekstraktovanje(uzimanje dela stringa) stringa.
// 1.slice(start, end)end nije ukljucen u opseg 
// 2.substring(start, end)end nije ukljucen u opseg.razlika u odnosu na slice je da substring ne prihvata negativne indekse.
// 3.substr(start,length)

//  Replace metoda vrsi zamenu nekoliko karaktera datog stringa.Ima 2 argumenta 
// Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa.
// 2 argumenta,1 argument je karakter koji zelimo da modifikujemo
// 2. argument je modifikacija

// 1. g(global)
recenica2 = recenica.replace(/s/g,"t");
// 1.2 i(insensitive)
recenica2 = recenica.replace(/s/i,"A");
console.log(recenica2)
// ako cemo sve da se promeni,odnosno malo ili veliko moramo i g i
recenica2 = recenica.replace(/s/gi,"A");
console.log(recenica2)

// Napomena.
// Sve string metode prave novu promenljivu (jer su stringovi immutable vrednosti.)!!!!!!!!!

// split() metoda nam vraca niz na osnovu nekog stringa na koji je primenjen

// Search metode

// 1.indexOf() metoda nam vraca prvu poziciju gde se zapravo pocinje poslati argument (jedan ili vise karaktera)kada se radi o nekom stringu.

// ako trazimo poziciju nepostojeceg stringa unutar nase recenice,rezultat dobijamo rezultat,-1.!!!!!

// Drugi argument predstavlja poziciju od koje cemo da krenemo trazenje datog stringa....

// search() metoda nam daje poziciju(index) nekog stringa (argumenta metoda)

// Razlike izmedju indexof i search metode.
// 1.Indexof()metoda dozvoljava drugi argument(pozicija odakel krece trazenje stringa);
// 2.search() metoda dozvoljava Regular Expressions
// 3.match() metoda nam vraca niz. u vidu objekta sa keys and values.

// 4. includes() metoda nam vraca boolean u zavisnoti od toga da li se argument nalazi u stringu na koji primenjujemo metodu.
// nije bitno koliko puta ukoliko se nalazi bice true,ukoliko ne bice false.
// includes metoda dozvoljava drugi argument tjst od kad da krene da trazi dati string.


// 5.startsWith() i endsWith() metode nam vracaju boolean u zavisnoti od toga da li dati string pocinje (zavrsava) argumentom metode.


// 3.Interpolacija - Omogucava laksi nacin interpolacije promenljivih (ili izraza) unutar nekog stringa.
// ovo su kad se stavljaju oni dolari,da ne mora da se ide sa + nego dolar i pozove se promenljiva/konstanta

======BROJEVI======

// JavaScript prepoznaje samo jedan tip podatka za brojeve.
// U pitanju je number tip podatka i oni mogu biti zapisani sa ili bez decimalnog zareza.

// Veliki brojevi mogu biti zapisani sa tzv. exponent(e) oznakom:

// NaN - Not a Number
// NaN je JavaScript rezervisana rec koja ukazuje da broj nije korektan.
// NaN je tipa number!!!

// Za proveru da li je neka vrednost korektan broj se koristi isNaN().
// Infinity (ili -Infinity) je vrednost koju cemo da dobijemo kada rezultat premasi najveci broj u JavaScriptu  (bude veoma mali broj).

// Pored osnovnog nacina dodeljivanja vrednosti nekoj promenljivoj mozemo to uraditi i preko new:
// Nije bas dobra praksa.

// Kada se nesto pravi preko NEW keyworda,uvek je object tipa

// JavaScript number metode.

// toString() metoda pretvara broj u string.
// Ova metoda pretvara bilo koji tip podatka u string

// toExponential() metoda nam vraca string broja,zaokruzen na onoliko decimala koliki je argument metode.

// toFixed() metoda nam vraca string broja koji ce biti zaokruzen na onoliko decimala koliki je zapravo argument.Ova metoda dira samo posle decimalne tacke brojeve.


// toPrecision() metoda vraca string broja,sa onoliko cifara koliki je argument funkcije i pre decimalnog zareza i nakon decimalnog zareza.

// valueOf() metoda vraca vrednost neke promenljive koju pozovemo.
// NAPOMENA!
// toString() i valueOf() metode vaze za sve tipove podataka u JavaScriptu.

// Global JavaScript metode.

// Globalne metode mogu biti primenjene na bilo koji tip podatka u JavaScriptu.

// Predstavicemo 3 najcesce metode koriscene sa brojevima.

// 1.Number() metoda vraca broj konvertovan iz argumenta.

console.log(Number("23"));
console.log(typeof Number("23"));//nUMBER

console.log(Number("   23         "));//23

console.log(Number("23+5"));//NaN

console.log(Number("23 56"));//NaN razmaci nisu dozvoljeni kod number metode ukoliko koristimo vise brojeva!!!

console.log(Number(true))//1 je true,0 je false.

console.log(Number("23,39"));//NaN

console.log(Number("23.78"));

console.log(Number([]));//0

console.log(Number({}));//NaN


// parseInt() - analizira argument koji moze biti bilo koji tip podatka i vraca nam ceo broj ako je moguce,dok ako nije 


// Razmaci su dozvoljeni kod parseInt-a,s tim sto se uzima u obzir samo prvi broj koji se pojavljuje!

// 3. parseFloat() - analizira argument i vraca realni broj sa decimalnim zapisom-ako je moguce.
// glavna razlika je ta da parseFloat prikazuje decimalni zapis a int ne.

// Number Properties!,konstante //


// Sledecim konstantama mozemo pristupiti jedino pomocu Number:
//Number.PropertyName

// Napomena.
// Konstante ne mogu biti primenjene na varijable.

// 1.MAX_VALUE - Vraca najveci broj u JavaScriptu.


// 2.MIN_VALUE - Vraca najmanji broj u JavaScriptu.

// 3. POSITIVE_INFINITY -Vraca Infinity.

// 4. NEGATIVE_INFINITY -Vraca -Infinity.

// 5. NaN -Vraca NaN.


//JavaScript Math Object//

// Math Objekat nam dozvoljava da izvrsimo neke dodatne radnje sa brojevima

// Math Properties(Konstante)

// Sintaksa je Math.Property.

// Math konstanti ima 8:

// 1.
// Math.E - vraca Ojlerov Broj.

// 2.Math.PI - vraca vrednost pi
// 3.Math.SQRT2 - vraca kvadratni koren iz dva,njegovu vrednost.
// 4.Math.SQRT1_2 - vraca kvadratni koren broja 1/2.
console.log(Math.SQRT1_2);// samo se ovako pozovu npr...
// 5.Math.LN2 - Vraca vrednost logaritma sa osnovom e za 2.
// 6.Math.LN10 - Vraca vrednost logaritma sa osnovom e za 10.
// 7.Math.LOG2E - Vraca vrednost logaritma sa osnovom 2 za e.
// 8.Math.LOG10E - Vraca vrednost logaritma sa osnovom 10 za e.
// Math Methods//

// Sintaksa je
// Math.method(number)

// Number to Integer:

// 1.Math.round() - vraca blizi ceo broj
console.log(Math.round(22.23));//primer ovde vraca 22
// 2.Math.ceil() - vraca sledeci ceo broj
// 3.Math.floor() - vraca prethodni ceo broj
// 4.Math.trunc() - vraca broj sa otklonjenim ostatkom,ceo broj!
// Math.sign(number) - vraca -1,0 ili u 1 u zavisnosti od toga koga je znaka broj.
// ako je negativan vraca -1,pozitivan 1 i neutralan odnosno 0.
// Math.pow(number,power) - vraca number stepenovan na power.
// Math.sqrt(number,koren) - vraca number korenovan.
// Math.abs(number) - Vraca apsolutnu vrednost nekog broja.
// Math.sin(radians) - vraca vrednost sinuca (izmedju -1 i 1).Argument se posmatra kao vrednost u radijanima
// Math.cos(radians) - vraca vrednost sinuca (izmedju -1 i 1).Argument se posmatra kao vrednost u radijanima
// Math.min() nam vraca najmanji broj od poslatih. Argumenata moze imati neograniceno.
// Math.max() nam vraca najveci broj od poslatih. Argumenata moze imati neograniceno.

// Primena kod nizova:
const najmanji = Math.min.apply(null, [19, 55, 33]);
console.log(najmanji);

// Math.random() nam daje broj izmedju 0(ukljucujuci) i 1(nije ukljucena).

// Math.log(x)  - vraca vrednost logaritma broja x za osnovu e
// Math.log2(x) - vraca vrednost logaritma broja x za osnovu 2
// Math.log10(x) - vraca vrednost logaritma broja x za osnovu 10



// Date objects //

// Kreiranje datuna //

// Kreiranej se vris preko NEW KEYWORD-a

// Kreiranje datuma moze izvrsiti na 4 nacina:

//1.new Date()

// 2.new Date(year,month,day,hour,minute,seconds,miliseconds)

// Meseci se racunaju od 0 do 11!!!
// Ako pravimo datume na ovaj nacin,moramo imati min 2 argumenta,a max 7.
// ako kasni za sate,to je zbog vremenske zone..

// Date.now() metoda koja nam prikazuje broj milisekundi od 1.1.1970. do trenutnog vremena.
// Date.parse(datum do kojeg cemo da odredimo koliko ima milisekundi od 1.1.1970) nam vraca broj milisekundi od 1.1.1970 do poslatog datuma.



// Get metode:

// Koristimo ih za dobijanje informacija iz Date objekta.

// getFullYear()-godinu
// getMonth()-mesec-od 0 do 11
// getDate()-datum,samo dan.
// getDay()-daje nam dan. //dani krecu od 0 do 6,gde je 0 nedelja!
// getHours()
// getMinutes()
// getSeconds()
// getMiliseconds()
// getTime()
 
// Set metode:

// Dozvoljavaju menjanje nekih vrednosti koda Date objekta.

// setDate()
// setMinutes()
// setSeconds()

// Postoje 2 nacina za ispitivanje da li je neka promenljiva niz:
//1.Array.isArray(potencijalnoNiz)
//2. potencijalnoNiz instanceof Array

// Elementi niza mogu biti bilo koje vrednosti:
// Date,Array,Boolean,number,string,Function...

// Za dodavanje elementa na kraju niza koristiti push()metodu.

//push() metoda nam omogucava dodavanje vise od jednog elementa na kraju niza.
// Za pretvaranje niza ustring mozemo koristiti 2 metode:
// 1.toString()
// 2.join()

//Dobijanje stringa i stavljanje nekog znaka izmedju elemenata niza koji smo pretvorili u string.
const danistr3 = dani.join("*");
console.log(danistr3);

// pop() metoda brise poslednji element iz niza.
// dani.pop() vraca vrednost izbrisanog elementa.

// unshift() metoda dodaje na pocetku niza jedan ili vise elemenata.
// unshift() prikazuje novu duzinu niza.

// shift() metoda brise prvi element niza i svim ostalim elementima smanjuje index za 1.
// shift() metoda vraca izbrisani element. Kao kod pop() metode.

// delete keyword za prisanje odredjenog elementa unutar niza:
// Preko delete keyword mozemo izbrisati bilo koji element iz niza ali na taj nacin ostavljamo rupe u nizu (undefined vrednosti).

// concat() metoda se koristi za spajanje nizova. concat() metoda pravi novi niz. S tim sto kao argument mozemo poslati i string, ne mora iskljucivo biti niz.

// splice() metoda je najmocnija alatka kod nizova u JavaScriptu.
// Omogucava nam promene u nizu na zeljenoj poziciji.
// 1.Mozemo dodati (koliko hocemo) elemenata na nekom mestu;
// 2.Mozemo izbrisati (koliko hocemo) elemenata na nekom mestu;

// splice() metoda uzima minimum 2 argumenta:
// Prvi argument predstavlja poziciju od koje ce se vrsiti neke promene;
// Drugi argument predstavlja broj elemenata koje brisemo.

// slice() metoda nam vraca deo niza:

// sort() metoda nam sortira niz abecedno.
// reverse() metoda sortira niz obrnutim redosledom(u odnosu na prethodno stanje).
// Ako zelimo sortiranje (Z-A) moramo prvo izvrsiti sort(),pa onda reverse().


// sort() metoda sama ne vrsi ispravno sortiranje kada se radi o brojevima.

// Za resavanje datog problema se koristi callback funkcija unutar sort metoda.
function poredjaj(a, b) {
  return a - b;
}// to je ova callback funkcija!;

// Array.from() nam vraca niz,koji se pravi od nekog objekta koji ima length.
// includes() metoda nam vraca boolean u zavisnosti od toga da li se argument nalazi u nizu.

// keys() metoda vraca Array Iterator Object sa kljucevima (indeksima) nekog niza.

// entries() metoda vraca Array Iterator Object sa key/value parovima nekog niza.

// callback funckije //

// callback funkcija predstavlja funkciju koju saljemo kao argument neke druge funkcije.
// Sam argument ne treba da bude izvrsavanje callback funkcije vec referenca na datu radnju.

// forEach() metoda poziva callback funkciju za svaki element niza.

// forEach() moze imati 3 parametra:
// 1.element niza
// 2.index niza
// 3.ceo niz

// sve metode mogu imati 3 parametra.

// map() metoda kreira novi niz(iste duzine kao originalni!!!!) sa logikom predstavljenom unutar callback funkcije unutar  date   metode.

// filter() metoda kreira novi niz sa onim elementima koji su prosli test.
// Novodobijeni niz moze imati maksimalno elemenata kao niz na koji se primenjuje metoda.Takodje moze biti prazan niz.

// reduce() metoda vraca jednu vrednost.Iteracija se vrsi kroz ceo niz.
// reduce posto nam vraca jednu vrednost,sluzi za sabiranje dva elementa.primer:
const zbirGodina = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(zbirGodina);


// every() metoda proverava da li su svi elementi iz niza zadovoljili uslov.
// every() metoda vraca boolean-true ili false.


// some() metoda proverava da li bar jedan element niza zadovoljava uslov.
// some() metoda vraca boolean.

// find() metoda vraca vrednost prvog elementa koji je prosao test funkcije.

// findIndex() metoda vraca index prvog elementa koji je zadovoljio uslov.


// CLOSURE FUNKCIJE //

// Poznata je cinjenica da kada se izvrsi funkcija,sve njene lokalne promenljive pokupi garbage colector i one prestaju da postoje u memoriji.
// Medjutim,to nije slucaj za funkcije cije promenljive zahteva neka druga funkcija.

// Closure je funkcija koja ima pravo pristupa promenljivim iz domena druge funkcije.
// To se najcese postize ugradjivanjem funkcije unutar druge funkcije,nakon cega se postize tzv. Block chain//kao domine.

// OBJEKTI //


// Objekti su promenljive koje sadrze vise vrednosti.
// Predstavljaju se u key:value(negde pise i name value)parovima.

// Pristupanje odredjenim vrednostima objekata mozemo izvrsiti na 2 nacina:
// Jedan key:value par se zove property(svojstvo).

//1.objectName.propertyName-(person.firstName);

//2.objectName["propertyName"]-(person[firstName]);

// u JavaScriptu this je keyword(rezervisana rec) koja ukazuje na neki objekat.
// this nije promenljiva i ne mozemo promeniti vrednost this-a.

// this ukazuje na razlicit objekat u zavisnosti od toga gde se koristi.

// * U nekom objektu this ukazuje na taj objekat.
// *U global scope this ukazuje na global object.

// JSON - JavaScript object notation //

// JSON je format za skladistenje i prenos podataka.
// Najcesce se koristi kada se podaci salju sa servera ka WEB stranici.
// JSON podaci su vrlo slicni JavaScript objektu i oni se zapisuju:

// keys/names zahtevaju duple navodnike,za razliku od JavScript objekta.

// Dve metode za pretvaranje:
// 1.JSON.stringify();
// JSON.strigify() pretvara nas objekat u JSON format paJSON u string.

// 2.JSON.parse();
// analizira se neki string i u slucaju mogucnosti pretvara objekat (nama citljiv podatak)

// JS objekti su mutable (promenljivi) //
//delete obj.property brise i key i value


// Napomena.
// Vrednosti nekog objekta mogu biti:
// Objekti
// Nizovi
// Funkcije...

// Konvertovanje objekta u niz:
// Object.values(obj)


// Pozivanje neke funkcije za odredjeni objekat se moze izvrsiti pomocu funkcija:

// 1.call();
// 2.apply();
// 3.bind();

// call() metoda za prvi argument ima objekat na koji se primenjuje,ostali argumenti metode koja se izvrsava.

// apply() metoda za prvi argument ima objekat na koji se primenjuje,drugi argument je niz gde smestamo argumente metode koja se izvrsava.

// bind() zahteva prethodno definisanje promenljive (funkcije) za odredjeni objekat,pa onda pozivanje funkcije sa eventualnim argumentima.


// spread operator(...)
// pomocu njega kloniramo niz ili objekat.

