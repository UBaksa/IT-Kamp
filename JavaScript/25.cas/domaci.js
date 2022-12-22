function udaljenost(broj, broj1) {
  let brojac1 = 0;
  let brojac2 = 0;
  if (broj > 100) for (broj; i >= 100; i--) brojac1++;
  else for (let i = broj; i <= 100; i++) brojac1++;
  if (broj1 > 100) for (let i = broj1; i >= 100; i--) brojac2++;
  else for (let i = broj1; i <= 100; i++) brojac2++;
  if (brojac1 > brojac2) {
    return broj1;
  } else if (brojac1 == brojac2) {
    return "Isto su udaljeni";
  } else return broj;
}

console.log(udaljenost(51, 149));

// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function domen(par1, par2) {
  if (isNaN(par1) || isNaN(par2)) {
    return `Morate uneti brojeve!`;
  } else if (par1 <= 60 && par1 >= 40 && par2 <= 60 && par2 >= 40) {
    return `Oba se nalaze u domenu od 40 do 60.`;
  } else if (par1 <= 100 && par1 >= 70 && par2 <= 100 && par2 >= 70) {
    return `Oba se nalaze u domenu od 70 do 100.`;
  } else if (par1 <= 60 && par1 >= 40 && par2 <= 100 && par2 >= 70) {
    return `Prvi se nalazi u domenu od 40 do 60,a drugi u domenu od 70 do 100.`;
  } else return `Prvi se nalazi u domenu od 70 do 100,drugi od 40 do 60.`;
}
console.log(domen(43, 73));
console.log(domen(75, 58));
console.log(domen(75, 88));
console.log(domen(43, 60));
console.log(domen("asd", "dsadas"));
console.log(domen("asd", 40));

// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

function veci(par1, par2) {
  if (isNaN(par1) || isNaN(par2)) {
    return `Moraju brojevi!!!!`;
  } else if (par1 > 60 || par1 < 40 || par2 > 60 || par2 < 40) {
    return `Broj/evi nisu unutar domena!`;
  } else {
    if (par1 > par2) {
      return `Prvi je veci od drugog.`;
    } else if (par1 === par2) {
      return `Isti su.`;
    } else return `Drugi je veci od prvog.`;
  }
}
console.log(veci(61, 40));
console.log(veci("cap", 40));
console.log(veci(60, 40));
console.log(veci(40, 60));
console.log(veci(40, 40));
