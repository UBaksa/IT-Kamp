// Stringovi su immutable promenljive,nije moguce vrsiti modifikaciju postojeceg stringa 
// Alternativa je da napravimo novi string i tada je moguce dodavati vrednosti kad god zelimo.

let rec1 = "Petak"
console.log(rec1[2]);

// toUpperCase()-metoda koja pretvara ceo string u velika slova .

// Ova metoda se primenjuje kad se na neku promenljivu izvrsi promenljiva koja sadrzi ovu npr rec1 = petak a petak je druga promenljiva i definise se petak.toUpperCase()
let PETAK = rec1.toUpperCase()

console.log(PETAK);

// toLowrCase()-metoda koja pretvara ceo string u mala slova.

let mali = PETAK.toLowerCase();
console.log(mali);

const recenica0 = "Zelimo DATu reCENIcu prikazaTI MALIM,isto takO i VELIkim slovima."
let mala = recenica0.toLowerCase();
let velika = recenica0.toUpperCase();
console.log(mala)
console.log(velika)























// Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom.

// const recenica = "sledece subote cemo imati test koji predstavlja kraj prvog ciklusa.Nakon toga cemo videti ko sve nastavlja sa 2. ciklusom it campa."
// const duzina = recenica.length

// let novaRecenica = ""
// // kod brojeva npr suma=0,ovde je ovako novaRecenica="",prazan string
// let novaRecenica2 = " "
// // ovo nije prazan string,iako ima space.
// console.log(Boolean(novaRecenica))
// console.log(Boolean(novaRecenica2))
// // boolean za string radi na principu,kada ima nesto u nekoj promenljivoj true je,a kada je prazan string false.
// for(let i = 0;i < duzina;i++){
//     if(i===0){
//         novaRecenica += recenica[i].toUpperCase();
//     }
//     else if (recenica[i-1] === " "){
//         novaRecenica += recenica[i].toUpperCase();
//     }
//     else{
//         novaRecenica += recenica[i];
//     }
// }
// console.log(novaRecenica)



const recenica = "sledece subote cemo imati test koji predstavlja kraj prvog ciklusa.Nakon toga cemo videti ko sve nastavlja sa 2. ciklusom it campa"
const duzina = recenica.length
let novaRecenica = "";

for(let i=0;i<duzina;i++){
    if(recenica[i+1]=== " "){
        novaRecenica+= recenica[i].toUpperCase();
    }
    else if(i===duzina-1){
        novaRecenica += recenica[i].toUpperCase();
    }
    else{
        novaRecenica += recenica[i]
    }
}
console.log(novaRecenica)