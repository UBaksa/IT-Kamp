// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.

// 2. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

// 3. Write a JavaScript program to find the most frequent item of an array.
// Sample array :
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];

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
