// Napraviti funkciju koja pravi novi niz gde ce se pozitivni elementi kvadrirati,negativni pomnoziti sa -1,a ako se neki element pojavluje vise puta u originalnom nizu,na svako sledece pojavljivanje ce se novom nizu dodati element "ovde je bio duplikat."

// const brojevi = [3, 3, 3, 2, 1, 5, 6, 7, 8];

// function callback(brojevi) {
//   let brojevi2 = [];
//   let puta = 0;

//   for (let i = 0; i < brojevi.length; i++) {
//     for (let k = i + 1; k < brojevi.length; k++) {
//       if (brojevi[i] === brojevi[k]) {
//         puta++;
// arr.slice(0, i).includes(arr[i])

//       }
//     }
//     puta = 0;
//   }
//   if (brojevi[i] < 0) {
//     brojevi2 = brojevi.map(Math.abs(brojevi[i]));
//   } else {
//     brojevi2 = brojevi.map(Math.pow(brojevi[i], 2));
//   }
//   return brojevi2;
// }

// console.log(callback(brojevi));

// function second(arr) {
//   const newArr = [];
//   for (let element of arr) {
//     if (newArr.inlcudes(element)) {
//       newArr.push("ovde je bio duplikat");
//     } else if (element < 0) {
//       newArr.push(-element);
//     } else {
//       newArr.push(element ** 2);
//     }
//   }
//   return newArr;
// }

// function second(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.slice(0, i).includes(arr[i])) {
//       newArr.push("ovde je bio duplikat");
//     } else if (arr[i] < 0) {
//       newArr.push(arr[i] ** 2);
//     } else {
//       newArr.push(arr[i] ** 2);
//     }
//   }
//   return newArr;
// }

// console.log(second([5, 4, -9, 0, -6, 5, 4]));

// Napraviti novi niz koji ce da se sadrzi od svih elemenata istih osim onih kojoi se nalaze na poziciji 0,3,5,te indexe kvadrirati.;

// function trazenje(clan) {
//   let element = clan.indexOf();
//   if (element === 0 || element === 3 || element === 5) {
//     return clan ** 2;
//   }
// }

// function gledanje(arr) {
//   const newArr = arr.map(trazenje);
//   return newArr;
// }

// console.log(gledanje([5, 4, -9, 0, -6, 5, 4]));

// brojevi = [2,5,8,-3,5,9]
// const brojevi1 = brojevi.map((element,index) => {
//     if(index === 0 || index === 3 || index ===5){
//         return element**2;
//     }
//     else{
//         return element;
//     }
// }
// da se kopira sa dzenovog git haba
// console.log()

const numbers = [2, 5, 10, 3, 4, 8];
// Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza.Dok za neparne elemente treba vratiti aritmeticku vrednost prethodnog elementa datog,i narednog.

function praviti(numbers) {
  const newnumber = numbers.map((element, index, arr) => {
    if (element % 2 === 0) {
      return element ** 2;
    } else {
      return (element + arr[index + 1] + arr[index - 1]) / 3;
    }
  });
  return newnumber;
}

console.log(praviti(numbers));
