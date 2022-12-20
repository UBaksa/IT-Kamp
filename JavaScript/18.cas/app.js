const sumaCifara = (broj)=>{
    if(isNaN(broj) || (broj < 1000 || broj > 9999)){
        return "Argument nije korektan.";
    }
    else{
        const cifraJedinice = broj % 10
        const cifraDesetice = Math.trunc((broj%100)/10);
        const cifraStotina  = Math.trunc((broj%1000)/100)
        const cifraHiljada  = Math.trunc(broj/1000)
        return cifraJedinice + cifraDesetice + cifraStotina + cifraHiljada;
    }
}
console.log(sumaCifara("123sfasfasfas"))
console.log(sumaCifara(100))
console.log(sumaCifara(4932))
// math.trunc brise ostatak nekog broja


// split() metoda nam vraca niz na osnovu nekog stringa na koji je primenjen

// Ako se kod split metode izostavi agrument,dobicemo niz od jednog elementa.

const recenica = "Ovde je prilicno hladno,ali smo dobili obecanje da ce uskoro poceti grejanje.Ako se to ne desi,bice odlaganja casova."

const niz = recenica.split();
console.log(niz)

const niz2=recenica.split(",")
console.log(niz2)

const niz3 = recenica.split("*")
console.log(niz3)

// Napraviti niz od stringa,tako da se elementi niza prave do svake reci "decembar".Rec "decembar",ne sme biti nijednog elementa niza.

const recenicaa = "Decembar je poslednji mesec u godini.U decembar pocinje zima,decembar je najhladniji mesec u godini.";

const niz4 = recenicaa.split(/decembar/i)
console.log(niz4)

// Search metode

// 1.indexOf() metoda nam vraca prvu poziciju gde se zapravo pocinje poslati argument (jedan ili vise karaktera)kada se radi o nekom stringu.

const pozicija = recenicaa.indexOf("j")
console.log(pozicija)

const pozicija2 = recenicaa.indexOf("mesec")
console.log(pozicija2)

// ako trazimo poziciju nepostojeceg stringa unutar nase recenice,rezultat dobijamo rezultat,-1.
const pozicija3 = recenicaa.indexOf("omar")
console.log(pozicija3)

// Drugi argument predstavlja poziciju od koje cemo da krenemo trazenje datog stringa....
const pozicija4 = recenicaa.indexOf("mesec",30)
console.log(pozicija4)

// 2.lastIndexOf() metoda nam vraca poslednju poziciju gde se zapravo pocinje poslati argument (jedan ili vise karaktera)kada se radi o nekom stringu.
const pozicija5 = recenicaa.lastIndexOf("mesec")
console.log(pozicija5)
// ako trazimo poziciju nepostojeceg stringa unutar nase recenice,rezultat dobijamo rezultat,-1.



// Napraviti funkciju koja na osnovu parametra ispituje pojavljivanje reci "ko osvaja"

// Ako se pojavljuje vise puta dati string,vratiti prvog i poslednjeg pojavljivanje,ako se pojavljuje jednom,vratiti poziciju pojavljivanja,dok ako se ne pojavljuje dati string vratit poruku:"Nismo pronasli dati string."

// function ispitivanje(recenicaa,pozicija8,pozicija7){
//     // const pozicija8 = recenica.lastIndexOf("ko osvaja")
//     const pozicija7 = recenica.indexOf("ko osvaja")
//     if(pozicija8 === -1 || pozicija7 === -1){
//         console.log("Nismo pronasli dati string.")
//     }
//     else if(pozicija8===pozicija7){
//         return "Reci `ko osvaja` se nalaze jednom u datoj recenici"
//     }
//     else if(pozicija6 !== pozicija7){
//         return "Prvo pojavljivanje reci `ko osvaja` se nalazi na " + pozicija6 + "poziciji.\nPoslednje pojavljivanje reci ko osvaja se nalazi na"+ pozicija8 + "poziciiji.";
//     }
// }
// console.log(ispitivanje("ko osvaja svetsko prvenstvo ove godine.Stvarno ko osvaja?"))

