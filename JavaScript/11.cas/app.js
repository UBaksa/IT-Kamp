// Napraviti novu recenicu koja ce imati isti teksta ali bez razmaka.

const recenica = "Omare jesi li spremio test?"
let duzina = recenica.length

let novaRecenica = "";

for(i=0;i<duzina;i++){
    if(recenica[i]!== " "){
        novaRecenica+=recenica[i];
    }
}
console.log(novaRecenica)
// ovo je da se izgubi razmak ili neki karakter.
let brojac = 0;
for(i=0;i<duzina;i++){
    if(recenica[i]=== " ")
    brojac++;
}
console.log(brojac)

// IF NAREDBA mora da sadrzi nesto sto ce da bude true ili false!!! u prevodu boolean.

// najspecificniji ide na pocetku,a ostali na kraju.



// Napraviti novu recenicu gde ce umesto slova a pisati t dok se ako posle slova a nalazi slovo n pisace d umesto a 

const recenicaa = prompt("Unesite recenicu");

let duzinaa = recenicaa.length

let novaRecenicaa = ""
for(let i=0;i<duzinaa;i++){
    if(recenicaa[i]==="a" && recenicaa[i+1]==="n"){
        novaRecenicaa+="d"
    }
    else if(recenicaa[i]==="a"){
        novaRecenicaa+="t"
    }
    else
    novaRecenicaa+=recenicaa[i]
}
// ako se izostavi ovo else samo se ispise d i t,mora ostatak da se ispise.
console.log(novaRecenicaa)
// deljivost za parne ide n%2===0\neparnost 2!==0.