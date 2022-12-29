// Date metoda-2 deo.

// Metode za prikazivanje datuma:

const trenutnoVreme = new Date();
console.log(trenutnoVreme);

// 1. toString() metoda
console.log(trenutnoVreme.toString());

// 2.toUTCString() metoda
console.log(trenutnoVreme.toUTCString());
// 3.toDateString() metoda
console.log(trenutnoVreme.toDateString());
// 4.toISOString() metoda
console.log(trenutnoVreme.toISOString());
//5.toTimeString()
console.log(trenutnoVreme.toTimeString());
//6.toLocaleTimeString()
console.log(trenutnoVreme.toLocaleTimeString());

// Get metode:

// Koristimo ih za dobijanje informacija iz Date objekta.

// getFullYear()-godinu
console.log(trenutnoVreme.getFullYear());
// getMonth()-mesec-od 0 do 11
console.log(trenutnoVreme.getMonth() + 1);
// getDate()-datum,samo dan.
console.log(trenutnoVreme.getDate());
// getDay()-daje nam dan. //dani krecu od 0 do 6,gde je 0 nedelja!
console.log(trenutnoVreme.getDay());
// getHours()

// getMinutes()

// getSeconds()

// getMiliseconds()

// getTime()

console.log(trenutnoVreme.getTime());

// Vraca broj milisekundi.

// Set metode:

// Dozvoljavaju menjanje nekih vrednosti koda Date objekta.

// setDate()

trenutnoVreme.setDate(19);
console.log(trenutnoVreme);
// sve je isto samo se menja datum,vreme godina sve ostaje..

// setMonth
trenutnoVreme.setMonth(5);
console.log(trenutnoVreme);

// setFullYear()
trenutnoVreme.setFullYear(2015);
console.log(trenutnoVreme);
// setHours()
trenutnoVreme.setHours(10);
console.log(trenutnoVreme);
// setMinutes()
// setSeconds()
// setMiliseconds()
trenutnoVreme.setFullYear();
// setTime()
