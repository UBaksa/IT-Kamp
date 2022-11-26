// STRINGOVI.

// Stringovi su immutable vrednosti (nepromenljive) sto znaci da ako hocemo neki slican string da dobijemo moramo napraviti novi 

// Metode(funckije koje primenjujemo za datu promenljivu)
// length metoda nam sluzi za dobijanje duzine stringa.

const recenica = "Kamerun dobijamo."
console.log(recenica.length)

// Pristupanje odredjenom karakteru ide preko indexa.
// Indeksiranje ide od nule do lenght-1(odnosno ukupne duzine stringa-1)
console.log(recenica[6])

// Koriscenje backslash(\)karaktera.

// String zapisujemo na 3 nacina:
// 1." "
// Rec koja zelimo da se nadje pod navodnicima mora biti pod obicnim navodnicima npr ako je string na duple,ta rec sto hocemo mora sa obicni tankim/ili obrnuto.
const string1 = "Danas je bilo 'lepo' vreme."
// 2.' ' obicni navodnici
// Drugi nacin jeste backslash operator.\
const string2 = 'Danas je bilo \'lepo\' vreme.'
console.log(string2)
// 3.` `backthick
const string3 = `Danas je bilo lepo vreme.`

// Primena backslash operatora na kraju reda.
const string5 = "Ovo ce da bude jedan dugacki string.Cela poenta je da prikazemo jedan te isti string u vise redova"

// \n prikazivanje stringa:
// novi red predstavlja.

const strign6 = "Ovo ce da bude jedan dugacki string, \nCela poenta je da prikazemo jedan te isti string u vise redova."

// Postoje 3 metode za ekstraktovanje(uzimanje dela stringa) stringa.
// 1.slice(start, end)end nije ukljucen u opseg 
// 2.substring(start, end)end nije ukljucen u opseg.razlika u odnosu na slice je da substring ne prihvata negativne indekse.
// 3.substr(start,length)

// Racunanje ide od 0.

const stringg = "Danas je bilo lepo vreme."

console.log(stringg.slice(0,5))
console.log(stringg.slice(-6,-1))
// start ide normalno,a end ide za +1 jer niej <= nego samo <.odnosno ukljucujuci.

console.log(stringg.substr(0,8))
