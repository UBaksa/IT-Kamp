function vracanje(arr1, arr2) {
  const arr22 = arr2.filter(function (element) {
    return element < arr1.length;
  });
  const arr3 = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > arr1.length - 1) {
      continue;
    } else {
      arr3.push(arr1[arr2[i]]);
    }
  }
  return arr3;
}
console.log(vracanje([23, 52, 38, 44], [50, 3, 1, 1]));

function proveravanje(niz) {
  let brojac = 0;
  for (let i = 1; i < niz.length - 1; i++) {
    if (niz[i] === 2 * niz[i - 1] && niz[i + 1] - niz[i] === 10) {
      brojac++;
    }
  }
  return brojac;
}
console.log(proveravanje([60, 120, 130, 260, 270]));
