// Domaci:
// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih ocena koje student ima u
// trenutnoj godini), prosekOcena (funckija koja na osnovu ocene vraca prosek
// datih ocena).

const student = {
  ime: "Bakir",
  prezime: "Ujkanovic",
  godine: 18,
  brojIndeksa: 036002,
  ocene: [8, 7, 10, 9, 9],
  prosekOcena: function (ocene) {
    const duzina = this.ocene.length;
    const prosekk = this.ocene.reduce(function (a, b) {
      return a + b;
    });
    return prosekk / duzina;
  },
};
console.log(student.prosekOcena());
