// Prebrojati koliko ima malih slova u unetom stringu.Slova koja se koriste u stringu pirpadaju iskljucivo engleskoj abecedi.
function kolikoMalihSlovaUNekojRecenici(recenica){
    const duzina = recenica.length;
    let brojac = 0;
    for(let i=0;i<=duzina-1;i++){
        if(recenica[i] === "a" || recenica[i] === "b" || recenica[i] === "c" || recenica[i] === "d" || recenica[i] === "e" || recenica[i] === "f" || recenica[i] === "g" || recenica[i] === "h" || recenica[i] === "i" || recenica[i] === "j" || recenica[i] === "k" || recenica[i] === "l" || recenica[i] === "m" || recenica[i] === "n" || recenica[i] === "o" || recenica[i] === "p" || recenica[i] === "q" || recenica[i] === "r" || recenica[i] === "s" || recenica[i] === "t" || recenica[i] === "u" || recenica[i] === "v" || recenica[i] === "w" || recenica[i] === "x" || recenica[i] === "y" || recenica[i] === "z" ){
            brojac++
        }
        else{
        continue}
    }
    return brojac;
}
function malalova(recenica){
    const duzina = recenica.length
    let brojac1 = 0;
    for(i=0;i<=duzina-1;i++){
        if(recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " "){
            brojac1++
        }
        else
        continue
    }
    return brojac1;
}

// console.log(malalova("Mala slova"))

// Ispitati da li u unetom stringu ima vise malih ili vise velikih slova,koja se koriste u stringu pripadaju iskljucivo engleskoj abecedi.

function veceManje(recenicaa){
    const duzina1 = recenicaa.length
    let veca = 0;
    let manja = 0;
    for(i=0;i<=duzina1-1;i++){
        if(recenicaa[i] !== recenicaa[i].toLowerCase()){
            veca++
        }
        else if(recenicaa[i] !== recenicaa[i].toUpperCase()){
            manja++
        }
    }
    if(veca > manja){
        return "Ima vise vecih slova nego manjih"
    }
    else
    return "Ima vise manjih slova nego vecih."
}
// console.log(veceManje("M"))
// 3.Sva velika slova u stringu treba svesti na mala slova.Npr za uneto webnstudy dobija se novi string

function pretvaranje(recen){
    const duzin= recen.length
    let novarecen = ""
    for(let i=0;i<duzin;i++){
        if(recen[i] !== recen[i].toLowerCase()){
            novarecen+=recen[i].toLowerCase
        }
        else
        novarecen+=recen[i]
    }
    return novarecen 
}

// console.log("malaslova.".toUpperCase())

// 4.Pronaci poziciju poslednjeg razmaka u stringu.Npr Pera ima devojku rezultat je 8.

function razmak(sentence){
    let trazenje = sentence.lastIndexOf(" ")
    return trazenje;
}
console.log(razmak("Cao brt"))