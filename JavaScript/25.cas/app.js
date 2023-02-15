// Predstavicemo 3 najcesce metode koriscene sa brojevima.

// 1.Number() metoda vraca broj konvertovan iz argumenta.

console.log(Number("23"));
console.log(typeof Number("23")); //nUMBER

console.log(Number("   23         ")); //23

console.log(Number("23+5")); //NaN

console.log(Number("23 56")); //NaN razmaci nisu dozvoljeni kod number metode ukoliko koristimo vise brojeva!!!

console.log(Number(true)); //1 je true,0 je false.

console.log(Number("23,39")); //NaN

console.log(Number("23.78"));

console.log(Number([])); //0

console.log(Number({})); //NaN

// parseInt() - analizira argument koji moze biti bilo koji tip podatka i vraca nam ceo broj ako je moguce,dok ako nije

console.log(parseInt("23"));
console.log(typeof parseInt("23")); //nUMBER

console.log(parseInt("   23         ")); //23

// Razmaci su dozvoljeni kod parseInt-a,s tim sto se uzima u obzir samo prvi broj koji se pojavljuje!

console.log(parseInt("23+5")); //23 parseint dozvoljava uz broj da stavimo nesto uz broj i uzima taj prvi broj pre toga neceg nesto.

console.log(parseInt("23 56")); //23 isto vazi i za ovo gore!!!!!

console.log(parseInt("ReC23 56")); //NaN,naisao na to da je nan i skonta da je nan.

console.log(parseInt(true)); //1 je true,0 je false.

console.log(parseInt("23,39")); //23

console.log(parseInt("23.78")); //23,sklanja zarez nije bitno,da li prelazi 5 ili ne,uvek sklanja zarez.

console.log(parseInt([])); //0

console.log(parseInt("adf")); //nan

console.log(parseInt(true)); //nan

console.log(parseInt(false)); //nan

console.log(parseInt({})); //NaN

// 3. parseFloat() - analizira argument i vraca realni broj sa decimalnim zapisom-ako je moguce.

console.log(parseFloat("23"));
console.log(typeof parseFloat("23")); //nUMBER

console.log(parseFloat("   23         ")); //23

console.log(parseFloat("23+5")); //23 parseFloat dozvoljava uz broj da stavimo nesto uz broj i uzima taj prvi broj pre toga neceg nesto.

console.log(parseFloat("23 56")); //23 isto vazi i za ovo gore!!!!!

console.log(parseFloat("ReC23 56")); //NaN,naisao na to da je nan i skonta da je nan.

console.log(parseFloat(true)); //1 je true,0 je false.

console.log(parseFloat("23,39")); //23

console.log(parseFloat("23.78")); //23.78

console.log(parseFloat([])); //0

console.log(parseFloat("adf")); //nan

console.log(parseFloat(true)); //nan

console.log(parseFloat(false)); //nan

console.log(parseFloat({})); //NaN

// glavna razlika je ta da parseFloat prikazuje decimalni zapis a int ne.c
