// Domaci zadatak:
// Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

function izdvajanje(recenica,n){
    const poslednjaSlova = recenica.slice(-n)
    return poslednjaSlova;
}
console.log(izdvajanje("Maja ima para",4))