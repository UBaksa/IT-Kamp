// search() metoda nam daje poziciju(index) nekog stringa (argumenta metoda)

const recenica = "Desila se neocekivana poseta."
const position = recenica.search("poseta")
console.log(position)


// Razlike izmedju indexof i search metode.
// 1.Indexof()metoda dozvoljava drugi argument(pozicija odakel krece trazenje stringa);
// 2.search() metoda dozvoljava Regular Expressions

const recenica2 = "Danas su cetvrtfinala svetskog prvenstva u fudbalu,danas je takodje bila dodela sertifikata."
const position2 = recenica2.search("danas");
console.log(position2)

// 3.match() metoda nam vraca niz.

const position3 = recenica2.match("danas")
const position4 = recenica2.match(/danas/gi);
console.log(position3)
console.log(position4)

// 4. includes() metoda nam vraca boolean u zavisnoti od toga da li se argument nalazi u stringu na koji primenjujemo metodu.
// nije bitno koliko puta ukoliko se nalazi bice true,ukoliko ne bice false.
const isPresence = recenica2.includes("Omar")
const isPresence2 = recenica2.includes("danas")
console.log(isPresence)
console.log(isPresence2)

// includes metoda dozvoljava drugi argument tjst od kad da krene da trazi dati string.
const isPresence3 = recenica2.includes("danas",60)
console.log(isPresence3);


// 5.startsWith() i endsWith() metode nam vracaju boolean u zavisnoti od toga da li dati string pocinje (zavrsava) argumentom metode.

const startsWithDanas = recenica2.startsWith("danas");
console.log(startsWithDanas)

const endsWithDanas = recenica2.startsWith("danas");
console.log(endsWithDanas)

// 6. JavaScript template literals

// Bolja praksa je koristiti ``

// Prednosti:
// 1.Mozemo koristiti navodnike (obicne ili duple ) unutar stringa.
const recenica3 = `Neki "dobri" ljudi.`
// 2.Template literals dozvoljavaju multiline stringove.
const recenica4 = `JKAFKLASFJKLASFKLASJKLASJFLKASFASFASKLFAS JNLASFASFKL;KJAS;JKAF;J
KF;J;DLFSDFSD;LFKSD;FLKSDF;
LSDKFL;FFDS;LSDGDSGKSDGSD;GSD`
console.log(recenica4)

// 3.Interpolacija - Omogucava laksi nacin interpolacije promenljivih (ili izraza) unutar nekog stringa.

let b = 34
let a = 5
const recenica5 = `Jedna flasa ima zapreminu ${a}l,ukupna kolicina limunade iznosi
${b}.Stoga mozemo napuniti ${Math.floor(b/a)} toliko flasa limunade.`

console.log(recenica5)


// Napraviti funkciju koja ispituje argument
// Ako se u recenici nadje rec skola,neka se vrati pozicija prvog pojavljivanja date reci.
// Ako recenicapocinje sa recju "Auotomobil",neka se vrati boolean true
// Ako je recenica parne duzine neka se vrati broj pojavljivanja reci "kuca"

function zadatak(recenicaa){
    const duzina = recenicaa.length
    const trazenje = recenicaa.indexOf("skola")
    const pocetak = recenicaa.startsWith("Automobil")
    if(trazenje !== -1){
        return console.log(trazenje)
    }
    else if(pocetak){
        return true;
    }
    else if(pocetak === false){
        return continue;
    }
    else if(duzina % 2 === 0){
        let brojac = 0;
        if(recenica.includes("kuca")){
        for(let i = 0;i<=duzina-1;i++){
            if(recenica.indexOf("kuca") === i){
                brojac++;
            }
        }
    }
    return `Broj pojavljivanja reci "kuca" unutar datog stringa je ${brojac}`
    }
}
console.log(zadatak("kuca kuca kuca."))
