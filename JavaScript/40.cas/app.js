// Napraviti glavnu funkciju koja ispisuje poruku da se radi o glavnoj funkciji.
//ali ispod toga neka se izvrsi pozivanje callback funkcije koja ima zadatak da izracuna aritmeticku sredinu 3 broja koji predstavljaju argumente te funkcjije.

function ars(a, b, c) {
  return (a + b + c) / 3;
}
function glavna() {
  console.log("Ovde se radi o glavnoj funkciji!");
  return ars(1, 2, 3);
}

console.log(glavna());

// CLOSURE FUNKCIJE //

// Poznata je cinjenica da kada se izvrsi funkcija,sve njene lokalne promenljive pokupi garbage colector i one prestaju da postoje u memoriji.
// Medjutim,to nije slucaj za funkcije cije promenljive zahteva neka druga funkcija.

// Closure je funkcija koja ima pravo pristupa promenljivim iz domena druge funkcije.
// To se najcese postize ugradjivanjem funkcije unutar druge funkcije,nakon cega se postize tzv. Block chain//kao domine.

function first() {
  const prom1 = "Hi";
  return `${prom1} guys.`;
}
console.log(first());
// console.log(prom1);

function second() {
  const a = 5;
  const b = 9;
  function closure(c) {
    return a * c;
  }
  return closure(3);
}
console.log(second());
