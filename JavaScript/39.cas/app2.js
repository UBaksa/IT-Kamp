// Rekurzivna funkcija poziva izvrsenje same sebe unutar funkcije.
// Efekeat petlje mozemo postici rekurzivnom funkcijom.

//Ispisati brojeve od 10 do 1:

for (i = 10; i >= 1; i--) {
  console.log(i);
}

function ispisivanje(n) {
  console.log(n);
  if (n - 1 > 0) {
    ispisivanje(n - 1);
  } else {
    return "Kraj";
  }
}
console.log(ispisivanje(10));
