// Izdvojiti N znakova sa desne strane(poslednjih N znakova) unetog stringa.
// Npre za string pera ima devojku,vraca vojku.

function pera(recenica,n){
    const poslednjihN = recenica.slice(-n);
    return poslednjihN;
}
console.log(pera("Pera ima devojku",5))


// Uneti string se sifruje tako sto se zamenjuje redosled znacima u stringu.Prvi i drugi zamene mesta,zatim 3 i 4 menjaju mesta itd...Ako string ima neparan broj znakova,poslednji znak se ne dira..

function menjanje(recenica){
    const duzina = recenica.length
    let novaRecenica = ""
    for(i=0;i<duzina;i++){
        if(duzina % 2 !== 0 && i === duzina-1){
            novaRecenica+= recenica[i]
        }
        else if(i % 2 === 0){
            novaRecenica += recenica[i+1]
        }
        else if(i % 2 !== 0){
            novaRecenica += recenica[i-1]
        }
    }
    return novaRecenica
}
// console.log(menjanje("Pera ima devojku."))


function kombinacije(recenica1,recenica2){
    const duzina1 = recenica1.length
    const duzina2 = recenica2.length
    let novaRecenica1 = ""
    if(duzina1 > duzina2){
        for(i=0;i<duzina1;i++){
            novaRecenica1 += recenica1[i] + recenica2[i]
    }
    return novaRecenica1   
}
// console.log(kombinacije("PERA","sladoledNa


// Napisati funkciju koja ce sakriti email adresu od nepoznatog coveka.


function mail(email){
    const maild = email.length
    let noviemail = ""
    const donjaCrta = email.indexOf("_") !== -1 ) ? email.indexOf("_" !== -1 ) : null;
    const tacka = email.indexOf(".") !== -1 ? email.indexOf(".") : null;
}
