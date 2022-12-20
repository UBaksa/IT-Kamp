// Napraviti funkciju koja ocekuje cetvorocifren broj,a vraca broj kojem su zamenjene prva i treca cifra,poslednja i druga.
// 4752
// 5247

function menjanje(broj){
    if( broj > 9999|| broj < 1000){
        return "Mora cetvorocifren broj da se unese."
    }
    else{
        const cifraJedinice = broj % 10
        const cifraDesetice = Math.trunc((broj%100)/10);
        const cifraStotina  = Math.trunc((broj%1000)/100)
        const cifraHiljada  = Math.trunc(broj/1000)
        // const cifraJedan = cifraJedinice.toString()
        // const cifraDeset = cifraDesetice.toString()
        // const cifraSto = cifraStotina.toString()
        // const cifraHiljadu = cifraHiljada.toString()
        return cifraDesetice.toString() + cifraJedinice.toString() + cifraHiljada.toString() + cifraStotina.toString()
    }
}
console.log(menjanje(42))
console.log(menjanje(4752))