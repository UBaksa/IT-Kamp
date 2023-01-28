// Domaci zadatak:
// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
  trenutnaBrzina: 0,
  maksimalnaBrzina: 260,
  povecanjeBrzine: function (ubrzanje) {
    if (ubrzanje + this.trenutnaBrzina > this.maksimalnaBrzina) {
      return;
    } else {
      return (this.trenutnaBrzina += ubrzanje);
    }
  },
  smanjenjeBrzina: function (smanjenje) {
    if (this.trenutnaBrzina < smanjenje) {
      return;
    } else {
      return (this.trenutnaBrzina -= smanjenje);
    }
  },
};
myCar.povecanjeBrzine(150);
console.log(myCar);
myCar.smanjenjeBrzina(17);
console.log(myCar);

myCar.koci = function () {
  this.trenutnaBrzina = 0;
};

myCar.koci();
console.log(myCar);
