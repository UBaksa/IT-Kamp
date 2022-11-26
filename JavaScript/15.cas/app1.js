const isSunny = false;

if(isSunny){
    console.log("Napolju je suncano.")
}
else{
    console.log("Napolju je kisovito")
}
// ako cemo da proverimo je l true ili false,samo napisemo naziv funkcije odnosno promenljive bez proveravanja jednakosti itd.SAMO ZA BOOLEAN!!!!
// odnosno truthy and falsy values.i ovako se pise ta kraca sintaksa.

// Postoji samo 8 FALSY vrednosti i one su:
// 1. False;
// 2. jedino je prazan string falsy,""
// 3. 0 je false,sve ostalo je pozitivno.
// 4.-0
// 5. 0n-npr 0*n.
// 6. undefined.
// 7. null.
// 8. NaN.


// Napraviti funkciju gde se trazi unos od strane korisnika i vraca poruka da li je uneta vrednost TRUTHY ili FALSY.

function vrednost(){
    let unos = prompt("Unesite neki unos")
    if(unos){
        console.log("Vrednost je TRUTHY")
    }
    else{
        console.log("Vrednost je FALSY")
    }
}
console.log(vrednost());