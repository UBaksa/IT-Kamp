//  Replace metoda vrsi zamenu nekoliko karaktera datog stringa.Ima 2 argumenta 
// Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa.

const recenica = "Danas smo podelili sertifikate za HTML/CSS i JavaScript."

// 2 argumenta,1 argument je karakter koji zelimo da modifikujemo
// 2. argument je modifikacija
let recenica2 = recenica.replace("s","t")
console.log(recenica2);
// za promenu svih pronalazenja datog stringa cemo koristiti Regulat Expressions:
// 1. g(global)
recenica2 = recenica.replace(/s/g,"t");
// posle argumenta a ne idu navodnici vec slash
console.log(recenica2);
// 1.2 i(insensitive)
recenica2 = recenica.replace(/s/i,"A");
console.log(recenica2)
// ako cemo sve da se promeni,odnosno malo ili veliko moramo i g i
recenica2 = recenica.replace(/s/gi,"A");
console.log(recenica2)


// toUpperCase() metoda za pretvaranje celog stringa u velika slova.
console.log(recenica.toUpperCase())

// toLowerCase() metoda za pretvaranje celog stringa u velika slova.
console.log(recenica.toLowerCase())


// concat() metoda vrsi spajanje dva ili vise stringova.

let a = "Danas je 16.cas JavaScripta."
let b = "Bice JavaScripte i preko 50 casova."
let c = a + " " + b
console.log(c)


c = a.concat(b)
console.log(c)
// 
c = a.concat(" ",b,"\nNakon toga cemo raditi react biblioteku.");
console.log(c);
// Napomena.
// Sve string metode prave novu promenljivu (jer su stringovi immutable vrednosti.)

// Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece.:
// Ako dati string ima vecu duzinu od 9:
// pravi novi string koji ce biti isecak od pola kraja originalnog stringa.Nakon toga novom stringu menjamo sva mala slova a sa velikim slovom "B". i funkcija ce vratiti novi string koji je sastavljen od "Ovo je novodobijena recenica, " i poslednjeg izmenjenog isecka.

// ako string ima duzinu<=9:
// Funkcija treba vratiti poruku:
// argument + {njena duzina } + "nedovoljno za dalje ispitivanje".
function resavanje(recen,recena){
    const duzina = recen.length;
    if(duzina>9){
        const novo = "Ovo je novodobijena recenica."
        recena =recen.slice((duzina/2),duzina);
        recena = recena.replace(/a/g,"B");
        console.log(novo.concat(" ",recena));
        }
    else{
            const nedovoljno = "Nedovoljno za dalje ispitivanje."
            console.log(recen.concat(duzina,nedovoljno))
    }
        return resavanje;
}


// math.ceil-ili Math.round da ga zaokruzi.

// ternary operator.

