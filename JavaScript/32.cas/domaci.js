// Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
// Sortiranje niza od najmanjeg ka najvecem broju,
// Napraviti funkciju koja vraca najveci element niza,
// Napraviti funkciju koja vraca najmanji element niza (na 2 nacina).
const niz = [-5, 6, 10, 45, 99, -44];

// Sortiranje niza od najveceg ka najmanjem broju,
niz.sort((a, b) => b - a);
console.log(niz);

// Sortiranje niza od najmanjeg ka najvecem broju,
niz.sort((a, b) => a - b);
console.log(niz);

// Napraviti funkciju koja vraca najveci element niza,
function najveci(niz) {
  niz.sort((a, b) => a - b);
  return niz[niz.length - 1];
}

console.log(najveci(niz));

// Napraviti funkciju koja vraca najmanji element niza (na 2 nacina).
function najmanji(niz) {
  niz.sort((a, b) => b - a);
  return niz[niz.length - 1];
}

console.log(najmanji(niz));
