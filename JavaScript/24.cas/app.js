// JavaScript number metode.

// toString() metoda pretvara broj u string.
// Ova metoda pretvara bilo koji tip podatka u string

let x = 22;
console.log(x)
console.log(typeof x)
let c = x.toString()
console.log(x)
console.log(typeof c);
console.log(x+c)

// toExponential() metoda nam vraca string broja,zaokruzen na onoliko decimala koliki je argument metode.

let z = 55.4758;
let w = z.toExponential(2);
console.log(w);
console.log(typeof w);

// toFixed() metoda nam vraca string broja koji ce biti zaokruzen na onoliko decimala koliki je zapravo argument.Ova metoda dira samo posle decimalne tacke brojeve.

let a = 12.1234
let h = +a.toFixed(2);

console.log(h)
console.log(typeof h)

// toPrecision() metoda vraca string broja,sa onoliko cifara koliki je argument funkcije i pre decimalnog zareza i nakon decimalnog zareza.
a = 12.1234
let j = a.toPrecision(3);
console.log(j)

// valueOf() metoda vraca vrednost neke promenljive koju pozovemo.

console.log(x.valueOf());

// NAPOMENA!
// toString() i valueOf() metode vaze za sve tipove podataka u JavaScriptu.


// Napraviti funkciju koja prima jedan argument(broj) i vraca poruku da li je dati broj palindrom.

function palindrom(broj1){
    const stringBroja = broj1.toString()
    let obrnuti = ""
    for(let i=stringBroja.length-1;i>=0;i--){
    obrnuti += stringBroja[i]
    }
    if(stringBroja === obrnuti){
        return "Dati broj jeste palindrom"
    }
    else 
    return "Nije brate"
}

console.log(palindrom(121))


// Napraviti funkciju koja ocekuje trocifren broj,a vraca dvocifren(iskljuci cifra desetice,da se izbrise sredisnji broj desetice.).


function vracanje(recenica){
    let prebacivanje = recenica.toString()
    let duzina = prebacivanje.length
    if(duzina > 3 || duzina < 3){
        return `Moramo uneti trocicren broj.`
    }
    else{
        let parce = prebacivanje.replace(prebacivanje[1],"")
        return parce
    }
} 

console.log(vracanje(123))
console.log(vracanje(12322))



// Napraviti funkciju koja ocekuje cetvorocifren broj,a vraca broj kojem su zamenjene prva i poslednja cifra,druga i treca.
// 4752
// 5247



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









