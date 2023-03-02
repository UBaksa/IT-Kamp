function User(ime, prezime) {
  this.ime = ime;
  this.prezime = prezime;
}

const bakir = new User("Bakir", "Ujkanovic");

// constructor funkcija za objekte.
console.log(bakir);

class Person {
  //   ime = "Default";
  //   prezime;
  //   godine;

  constructor(ime, prezime, brGodina) {
    this.ime = ime;
    this.prezime = prezime;
    this.godine = brGodina;
  }

  imeIPrezime() {
    return `${this.ime} ${this.prezime}`;
  }
}

const person1 = new Person("Kola", "Limenka", 16);
//person1 moze pristupiti bilo kojoj metodi iz class-e Person(koja je napravljena na standardan nacin.)
console.log(person1);

class Product {
  static increaseForTen = 1.1;
  constructor(name, price, desc, weigth) {
    this.name = name;
    this.price = price;
    this.description = desc;
    this.weigth = weigth;
  }
  static increasePrice() {
    console.log(
      `This method will increase price for our product for 10% multiplaying current by ${this.increaseForTen}`
    );
  }
}

const socks = new Product("white socks", 120, "100% cotton", 50);
console.log(socks);
// Ne mozemo pristupiti statickoj metodi iz objekta,vec samo direktno preko klase.
// console.log(socks.increasePrice());
console.log(Product.increasePrice());

// INHERITANCE

class Covek {
  constructor(ime, prezime, pol, starost) {
    this.ime = ime;
    this.prezime = prezime;
    this.pol = pol;
    this.starost = starost;
  }
  getInfo() {
    console.log(`${this.ime} ${this.prezime} ima ${this.starost}`);
  }
}

const insan = new Covek("Amin", "Starcanin", "musko", 32);
console.log(insan);
console.log(insan.getInfo());

class Student extends Covek {
  constructor(
    ime,
    prezime,
    pol,
    starost,
    brojIndeksa,
    godinaStudija,
    prosecnaOcena
  ) {
    super(ime, prezime, pol, starost);
    this.brojIndeksa = brojIndeksa;
    this.godinaStudija = godinaStudija;
    this.prosecnaOcena = prosecnaOcena;
  }
  getInfo() {
    console.log(
      `${this.ime} ${this.prezime} ima ${this.starost}godina.Trenutno je na ${this.godinaStudija}. godini studija i prosecna ocena mu je ${this.prosecnaOcena}.`
    );
  }
}

const student1 = new Student("Amer", "Honic", "M", 19, 123321, 1, 7.77);
console.log(student1);
console.log(student1.getInfo());
