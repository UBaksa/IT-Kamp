// 1.zadatak
// const prviBroj = Number(prompt("Unesite prvi broj: "))
// const drugiBroj = +prompt("Unesite drugi broj: ")
// // ovo su dve metode kako da se konvertuju strinogiv u number
// if(isNaN(prviBroj)  || isNaN(drugiBroj)){
//     console.log("Unete vrednosti moraju biti brojevi.")
// }
// else if(prviBroj === drugiBroj){
//     console.log("Povrsina kvadrata na osnovu unetih stranica iznosi " + prviBroj * drugiBroj)
// }
// else if(prviBroj !== drugiBroj){
//     console.log("Povrsina pravougaonika na osnovu unetih stranica iznosi " + prviBroj * drugiBroj)
// }
// else {
//     console.log("Niste uneli korektne vrednosti")
// }

// Za proveru da li je vrednost nekog broja NaN se koristi metoda:
// isNaN(vrednost)


// 2.zadatak
const x = Number(prompt("Unesite x: "))
const y = Number(prompt("Unesite y: "))

if(isNaN(x) || isNaN(y)){
    console.log("Vrednosti moraju biti brojevi")
}
else if(y === 0){
    console.log("Deljenje nulom nije moguce.")
}
else{
    console.log("Kolicnik unetih brojeva je:" + x/y)
}