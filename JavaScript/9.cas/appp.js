// let recenica ="Danas cemo neke operacije sa stringovima."
// console.log(recenica);
// console.log(typeof recenica);

// let omar = "Omar"


// Pristupanje nekom karakteru stringa:

// omar[0]
// indeksiranje ide od 0 do kad stigne,ide 0,1,2,3...
// poslednji karakter ima index ukupna duzina stringa pa -1.
// ako je od 0 do n,poslednji ima n-1

// console.log(omar[0])
// console.log(omar[2])

// Metoda za dobijanje ukupne duzine stringa je length

// let duzinaRecenice = recenica.length;
// console.log(duzinaRecenice);
// console.log(omar.length)

// Primer.Svaki karakter neke recenice neka se ispise jedan ispod drugog.
// Kod ovakvih zadataka iterator predstavlja index pomocu kojeg pristupamo karakteru stringa.


// recenica ="Danas cemo neke operacije sa stringovima."
// const duzina = recenica.length
// for(let i = 0;i<duzina;i++){
    // kad se odredjuje duzina u statement2,uvek idemo -1 zbog zadnjeg indexa
    // console.log(recenica[i])
// }
// Na osnovu unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide jedan ispod drugog.Dok ako je neki karakter ="a",neka se ispise broj 5,a u slucaju da je karakter jednak "s",neka se ne ispise nista.

// let recenica = prompt("Unesite neku recenicu.");
// const duzina = recenica.length
// let s = new String("s");
// let a = new String("a");
// for(i=0;i<duzina;i++){
//     if(i=a){
//     a= new Number(5)
//     console.log(recenica[i])
//     }
// }

// kod brojeva se upravljamo prema i ,a ovde constanta,i i predstavlja index i postupamo na principu konstanta[i]
const recenica = prompt("Unesite neku recenicu:")
const duzina = recenica.length
for(let i =0;i<duzina;i++){
    if(recenica[i] === "a"){
        console.log(5)
    }
    else if(recenica[i] === "s"){
        continue
    }
    else{
    console.log(recenica[i]);
    }
}

