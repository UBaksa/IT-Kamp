// 1. Write a simple JavaScript program to join all elements of the following array into a string where is * between elements.

// 2. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

// 1. Write a simple JavaScript program to join all elements of the following array into a string where is * between elements.

function prvi(niz) {
  let nizstring = niz.join("*");
  return nizstring;
}

const niz1 = ["prvi", 5, "sedam", "dvadeset pet"];

console.log(prvi(niz1));

// 2. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8
function drugi() {
  let unos = prompt("Unesite brojeve(samo brojeve):");
  let novis = "";
  for (let i = 0; i < unos.length; i++) {
    if (unos[i] % 2 === 0 && unos[i + 1] % 2 === 0) {
      novis += unos[i] + "-";
    } else {
      novis += unos[i];
    }
  }
  return novis;
}
console.log(drugi());

// Domaci sto je bio od proslog casa na drugi nacin.

const niz3 = [-5, 6, 10, 45, 99, -44];

function minel(niz3) {
  let min = niz3[0];
  for (let p of niz3) {
    if (p < min) {
      min = p;
    } else {
      continue;
    }
  }
  return min;
}
console.log(minel(niz3));
