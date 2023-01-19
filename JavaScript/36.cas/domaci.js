// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.

// 2. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

// // 3. Write a JavaScript program to find the most frequent item of an array.
// // Sample array :
// const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
// array1 = [1, 0, 2, 3, 4];
// array2 = [3, 5, 6, 7, 8, 13];

// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.

const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const niz2 = niz.filter(function (element) {
  return element % 2 === 0;
});
const suma = niz2.reduce(function (par1, par2) {
  return par1 + par2;
});
console.log(suma);

// 2. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
const nizz = niz.filter(function (element) {
  return element % 2 === 0;
});
const nizz2 = nizz.map(function (element) {
  return element * 2;
});
const nizz3 = nizz2.reduce(function (par1, par2) {
  return par1 + par2;
});
console.log(nizz3);

// / 3. Write a JavaScript program to find the most frequent item of an array.
// Sample array :
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let element;
let pojavljivanje = 1;
let br = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      br++;
      if (pojavljivanje < br) {
        pojavljivanje = br;
        element = arr1[i];
      }
    }
  }
  br = 0;
}
console.log("Element je " + element);
console.log("Pojavljuje se " + pojavljivanje + " " + "puta");
// // 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
const stringg = "The Quick Brown Fox";

function malavelika(niz) {
  let novi = "";
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] === niz[i].toUpperCase()) {
      novi += niz[i].toLowerCase();
    } else {
      novi += niz[i].toUpperCase();
    }
  }
  return novi;
}
console.log(malavelika(stringg));

// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];

const addition = (arr1, arr2) => {
  const length = arr1.length > arr2.length ? arr1.length : arr2.length;
  const newArr = [];
  for (let i = 0; i < length; i++) {
    if (arr1[i] === undefined) {
      newArr.push(arr2[i]);
    } else if (arr2[i] === undefined) {
      newArr.push(arr1[i]);
    } else {
      newArr.push(arr1[i] + arr2[i]);
    }
  }
  return newArr;
};
console.log(addition(array1, array2));
