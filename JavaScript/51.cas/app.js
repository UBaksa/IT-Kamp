function string(niz) {
  for (let i = 0; i < niz.length; i++) {
    for (j = 1; j < niz.length; j++) {
      if (niz[i].length > niz[j].length) {
        let pom = niz[j];
        niz[j] = niz[i];
        niz[i] = pom;
      }
    }
  }
  return niz;
}

let stringg = ["Brate", "Stan", "Superman", "Cao"];
console.log(string(stringg));
