// 1.Primitivni tipovi podataka.
//(Primitivni tipovi podataka)
// (Vrednosni tipovi podataka)

// 2.Referentni Tipovi podataka
// Neprimitivni Tipovi Podataka\

let brojGodina = 26;
let brojTvojihGodina = brojGodina;

console.log(brojTvojihGodina);

brojTvojihGodina = 22;
console.log(brojTvojihGodina);

console.log(brojGodina);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let godine = [20, 21, 18, 17, 17, 19, 18, 17, 18, 19];
let noveGodine = godine;

console.log(noveGodine);

noveGodine = [21, 22, 19, 18, 18, 20, 19, 18, 19, 20];
console.log(noveGodine);

console.log(godine);
