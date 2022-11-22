// Funkcije u JavaScriptu predstavlja blok koda koji se izvrsava samo prilikom pozivanja iste.

// Mozemo je definisati putem:
// 1.function keyword
// 2.arrow function 

// 1.function keyword:


// Pravimo funkciju koja sabira broj 3 i broj 9.
function zbirTriIPet(){
    const zbir = 3 + 5;
        return zbir;
}

// kad se god napravi funkcija bez return-a pa ime const-a npr,u consoli se pise undefined
// kad se ispise return ispod glavnog returna,u oovom slucaju return zbir-a,nista se ne returna vec samo do prvog returna radi funkciju/odnosno sve nakon 1 return se zanemaruje.

console.log(zbirTriIPet());
// kad se funkcija poziva,ona se poziva ovako,ime funkcije pa ide () !!!!!!!!



// Pravimo funkciju koja sabira dva broja koja mi unesemo.

// izmedju zagrada () se nalazi parametar/argument
function zbirDvaBroja(par1,par2){
    return par1 + par2;
}

console.log(zbirDvaBroja(5,22))


// Napraviti funkciju koja vraca zbir kvadrata dva broja.

function zbirKvadrata(x1,x2){
    return x1*x1 + x2*x2
}
// console.log(zbirKvadrata(+prompt("Unesite broj1"),+prompt("Unesite broj2")))

// Defaultna vrednost nekog parametra:
// Napraviti funkciju koja vraca zbir kvadrata dva broja.Ako se izostavi drugi argument,funkcija ga vraca kao 0.

// 1.Nacin
function zbirKvadrata2(a,b){
    if(b === undefined){
        return a**2;
    }
    else{
        return a**2 + b**2
    }
}

console.log(zbirKvadrata2(2,3))
console.log(zbirKvadrata2(2))

// 2 nacin.
function zbirKvadrat3(a,b=0){
    return a**2 +b**2;
}
console.log(zbirKvadrat3(2,3))

// Jos jedan nacin definisanja funkcije preko function keyword-a.
const aritmetickaVrednost = function(par1=1,par2=1,par3=1){
    return (par1 + par2 + par3)/3;
}
console.log(aritmetickaVrednost(4,5,3))


// Napraviti povrsina koja uzima dve vrednosti.
// Ako su te vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,dok ako su razlicite treba da vrati poruku uz odredjenu poruku.

function povrsina(a,b){
    if(a===b){
        return ("Povrsina kvadrata jednaka je:" + a**2);
    }
    else{
        return ("Povrsina pravouganika jednaka je:" + a*b)
    }
}

console.log(povrsina(4,4))