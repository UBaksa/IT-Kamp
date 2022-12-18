// Napraviti funkciju koja ocekuje cetvorocifren broj,a vraca broj kojem su zamenjene prva i poslednja cifra,druga i treca.
// 4752
// 5247

function menjanje(broj1){
    let string = broj1.toString()
    const duzina = string.length
    if(duzina > 4 || duzina < 4){
        return "Mora cetvorocifren broj da se unese."
    }
    else{
        let prva = string.replace(string[0],string[3]);
    }
}
console.log(menjanje(42))
console.log(menjanje(4752))