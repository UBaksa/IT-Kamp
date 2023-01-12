// callback funckije //

// callback funkcija predstavlja funkciju koju saljemo kao argument neke druge funkcije.
// Sam argument ne treba da bude izvrsavanje callback funkcije vec referenca na datu radnju.
function glavnaFunkcija(func) {
  console.log("Radnja unutar glavne funckije");
  func();
  console.log("Kraj glavne funkcije");
}

function callback() {
  console.log("Radnja unutar callback funkcije.");
}

glavnaFunkcija(callback);

// Napraviti glavnu funkciju unutar koje ce se desiti radnja za ispis sta ona predstavlja,a celu stvar ce da izvrsi callback funkcija.Callback funkcija ima 2 parametra,i ispisuje rezultat par1 stepenovan par2.

function glavnaa(func) {
  console.log("Izvrsicemo stepenovanje prvog broja na drugi.");
  stepenovanje(2, 3);
}

function stepenovanje(par1, par2) {
  console.log(par1 ** par2);
}

glavnaa(stepenovanje);
