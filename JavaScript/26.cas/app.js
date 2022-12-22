//JavaScript Math Object//

// Math Objekat nam dozvoljava da izvrsimo neke dodatne radnje sa brojevima

// Math Properties(Konstante)

// Sintaksa je Math.Property.

// Math konstanti ima 8:

// 1.
// Math.E - vraca Ojlerov Broj.

console.log(Math.E);

// 2.Math.PI - vraca vrednost pi
console.log(Math.PI);
// 3.Math.SQRT2 - vraca kvadratni koren iz dva,njegovu vrednost.

console.log(Math.SQRT2);

// 4.Math.SQRT1_2 - vraca kvadratni koren broja 1/2.

console.log(Math.SQRT1_2);

// 5.Math.LN2 - Vraca vrednost logaritma sa osnovom e za 2.

console.log(Math.LN2);

// 6.Math.LN10 - Vraca vrednost logaritma sa osnovom e za 10.

console.log(Math.LN10);

// 7.Math.LOG2E - Vraca vrednost logaritma sa osnovom 2 za e.

console.log(Math.LOG2E);

// 8.Math.LOG10E - Vraca vrednost logaritma sa osnovom 10 za e.

console.log(Math.LOG10E);

// Math Methods//

// Sintaksa je
// Math.method(number)

// Number to Integer:

// 1.Math.round() - vraca blizi ceo broj

console.log(Math.round(22.23));
console.log(Math.round(22.74));

// 2.Math.ceil() - vraca sledeci ceo broj

console.log(Math.ceil(22.22));
console.log(Math.ceil(-22.22));

// 3.Math.floor() - vraca prethodni ceo broj

console.log(Math.floor(22.22));
console.log(Math.floor(-22.22));

// 4.Math.trunc() - vraca broj sa otklonjenim ostatkom,ceo broj!

console.log(Math.trunc(22.22));
console.log(Math.trunc(-22.22));

// Math.sign(number) - vraca -1,0 ili u 1 u zavisnosti od toga koga je znaka broj.

console.log(Math.sign(-53));
console.log(Math.sign(53));
console.log(Math.sign(0));

// Math.pow(number,power) - vraca number stepenovan na power.

console.log(Math.pow(5, 2));

// Math.sqrt(number,koren) - vraca number korenovan.

console.log(Math.sqrt(9));

// Math.abs(number) - Vraca apsolutnu vrednost nekog broja.

console.log(Math.abs(5));
console.log(Math.abs(-5));

// Math.sin(radians) - vraca vrednost sinuca (izmedju -1 i 1).Argument se posmatra kao vrednost u radijanima

console.log(Math.sin(0));
console.log(Math.sin(Math.PI / 2));

// Math.cos(radians) - vraca vrednost sinuca (izmedju -1 i 1).Argument se posmatra kao vrednost u radijanima

console.log(Math.cos(0));
console.log(Math.cos(Math.PI / 2));

function veci(par1, par2) {
  let prvi = Math.abs(par1 - 100);
  let drugi = Math.abs(par2 - 100);
  if (prvi < drugi) {
    return `Prvi je blizi`;
  } else if (prvi === drugi) return `Isti su`;
  else return `Drugi je blizi`;
}
console.log(veci(200, 0));
console.log(veci(150, 0));
console.log(veci(-20, 120));
