// Date objects //

// Kreiranje datuna //

// Kreiranej se vris preko NEW KEYWORD-a

// Kreiranje datuma moze izvrsiti na 4 nacina:

//1.new Date()

const trenutnovreme = new Date();

console.log(trenutnovreme);

// 2.new Date(year,month,day,hour,minute,seconds,miliseconds)

const datumrodjenja = new Date(2003, 11, 25, 7, 30, 15, 30);

console.log(datumrodjenja);

// Meseci se racunaju od 0 do 11!!!
// Ako pravimo datume na ovaj nacin,moramo imati min 2 argumenta,a max 7.
// ako kasni za sate,to je zbog vremenske zone..

let datum = new Date(2013, 7);
console.log(datum);

// 3. nacin,slanjem jednog argumenta unutar new Date()-a.
// Ovako napravljen datum je zapravo dodat broj milisekundi na 1.1.1970 jer od tad pocinje racunanje vremena u JS-u,defaultna vrednost.
datum = new Date(2022);
console.log(datum);

// 4. Slanjem stringa u Date() kao argument.String ce biti parse_ovan i dobicemo datum na osnovu toga.

datum = new Date(`2017  25`);
console.log(datum);
console.log(typeof datum);

// Jedna i dve cifre godine ce biti interpretirane kao 19xx(racunaju se za prosli vek)
// 19xx ili 190x.

datum = new Date(6, 0);
console.log(datum);

const datum2 = Date.now();
console.log(datum2);

console.log(Date.parse(datumrodjenja));
// racuna od 1.1.1970 do datuma rodjenja-mog.

// Date.now() metoda koja nam prikazuje broj milisekundi od 1.1.1970. do trenutnog vremena.
// Date.parse(datum do kojeg cemo da odredimo koliko ima milisekundi od 1.1.1970) nam vraca broj milisekundi od 1.1.1970 do poslatog datuma.

// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
//"1995-05-24" i "2004-09-15"
