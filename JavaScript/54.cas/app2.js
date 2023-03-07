// //Promise je JavaScript objekat koji predsatvlja mesto zax rezutlate asinhrone funkcije sve dok traje izvrsavanje asinhrone operacije.

// const cizburger = new Promise((resolve, reject) => {
//   const response = 200;
//   if (response >= 200 && response < 300) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// cizburger
//   .then(() => console.log("Dobio sam cizburger."))
//   .catch(() => console.log("Nisam dobio obrok."))
//   .finally(() => console.log("Obecanje je zavrseno."));

const promisee = new Promise((resolve, reject) => {
  const response = [3, 5];
  if (response.length >= 4 && response.length < 10) {
    resolve();
  } else {
    reject();
  }
});

promisee
  .then(() => console.log("Niz je te duzine!"))
  .catch(() => console.log("Nema dovoljnu duzinu"))
  .finally(() => console.log("Proverili smo duzinu."));

//   chain efekat se postize tako sto vrednost koaj treba biti kroiscena u narednoj callback funkciji then metode se mora naci u return prethodne callback funkcije,prethodne then metode.

const promis = new Promise((resolve, reject) => {
  const response = "Neki string od dosta.";
  let brojac = 0;
  for (let i = 0; i < response.length; i++) {
    if (
      response[i] === "a" ||
      response[i] === "e" ||
      response[i] === "i" ||
      response[i] === "o" ||
      response[i] === "u"
    ) {
      br++;
    }
    if (brojac > 10) {
      resolve();
    } else {
      reject();
    }
  }
});

promis
  .then(() => console.log("String ima vise od 10 samoglasnika"))
  .catch(() => console.log("String ne zadovoljava uslov"))
  .finally(() => console.log("Proverio se string!"));
