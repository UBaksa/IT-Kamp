function malavelika(niz) {
  let novi = "";
  for (let i = 0; i <= niz.length; i++) {
    if (niz[i] === niz[i].toLowerCase()) {
      novi += niz[i].toUpperCase();
    } else {
      novi += niz[i].toLowerCase();
    }
  }
  return novi;
}
console.log(malavelika("The Quick Brown Fox"));