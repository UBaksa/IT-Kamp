// Domaci zadatak.
// 1.	Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo). Npr. za string 'Mama ima momu', dobija se rezultat 5.

// const recenica = prompt("Unesite neku recenicu.");
// let s = 0;
// let duzina = recenica.length
// let i = 0;
// while(i<duzina){
//     if(recenica[i] === "M"){
//         s++;
//     }
//     else if(recenica[i] === "m"){
//         s++;
//     }
//     else{
//         console.log(s);
//     }
//     i++
// }

// 2.	Prebrojati koliko ima znakova koji su cifre u unetom stringu.

const recenica = prompt("Unesite neku recenicu za brojevima.")
let duzina = recenica.length
let brojac = 0;
for(let i=0;i<duzina;i++){
    if(recenica[i] === "0" || recenica[i] === "1" || recenica[i] === "2" || recenica[i] === "3" || recenica[i] === "4" || recenica[i] === "5" || recenica[i] === "6" || recenica[i] === "7" || recenica[i] === "8" || recenica[i] === "9"  ){
        brojac++
    }
    else {
    continue
}
}


// for(i=0;i<duzina;i++){
    // if(!isNan(recenica.[i]))}
    // brojac++
// ovo sa uzvicnikom je metoda se okrene kontra,sa uzvicnikom ako se ucita broj bice true a ako je string false,a inace je broj false a string true.
// 