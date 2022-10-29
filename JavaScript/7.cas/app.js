// While petlja nam omogucava iteraciju kroz neki objekat nekoliko puta uz potencijalno odredjene uslove.
// kod while petlje je neophodno na kraju koda definisati povecanje iteratora,kako ne bi bio upaljen live reload(ne bi smo dobili beskonacnu petlju).

// Sintaksa

// while (uslov){
// blok koda za izvrsavanja 
// definisati povecanje iteratora
// ispisati sve brojeve od 1 do 10 koji su parni
let i=1;
while(i<11){
    if(i %2 ===0){
    console.log(i)
    }
    i++
}
// ovako se konstruise jedna while petlja!!!,u (ove zagrade) se unosi granica i,statement 2 izvan petlej i statement 3 na kraj petlje,u okviru nje.

// traziti od korisnika da unese neki broj.Na osnovu te vrednosti izvrsiti ispis kvadrata brojeva od 1 do tog unetog broja:
// let brojac=1;
// let broj=Number(prompt("Unesite granicni broj"))
// while(brojac<=broj){
//     console.log(brojac*brojac)
//     brojac++
// }

// Korisnik unosi 2 broja
// Na osnovu toga koji je broj manji,iteracija se vrsi od njega do veceg broja.
// ispisuju se brojevi od manjeg ka vecem.
// let broj1=Number(prompt("Unesite jedan broj"))
// let broj2=Number(prompt("Unesite drugi broj"))
// let z=broj1<broj2
// let c=broj1>broj2
//     if(broj1<broj2){
//         console.log(z)
//     }
//     else if(broj1>broj2){
//         console.log(c)
//     }
//     broj1++
//     broj2++
// }
let broj1 =+prompt("Unesite prvi broj")
let broj2 =+prompt("Unesite drugi broj")
if(isNaN(broj1) || isNaN(broj2)){
    console.log("Brojevi moraju imati korektne vrednosti .")
}
else if(broj1<broj2){
    while(broj1<=broj2){
        console.log(broj1)
        broj1++;
    }
}
else if(broj1>broj2){
while(broj1>=broj2){
    console.log(broj2)
    broj2++;
}
}
else if(broj1 ===broj2){
    console.log("Uneti brojevi moraju biti razliciti.")
}
// ovako nesto se radi preko kondicionala if i else if ali unutar njih da bude petlja!!!!!!!dosta lak nacin da se rade zadaci.



// do while petlja predstavlja poseban slucaj while petlje,gde se prvo izvrsava kod pa tek onda proverava uslov.

// Sintaksa
// do {
// blok koda za izvrsavanje sve dok vazi odredjeni uslov
// }while(uslov)

// ispisati brojeve od 1 do 5.
// let broj3 = 1;

// do{
//     console.log(broj3);
//     broj3++;
// }while (broj3 < 6){};
// nedostatak do while petlje kroz primer.
// ispisati sve brojeve manje od 20 krenuvsi od broja koji unosi korisnik.

// let broj4=Number(prompt("Unesite neki broj:"))
// do{
//     console.log(broj4)
//     broj4++
// }while(broj4<20);
// ako se unese vise od 20,npr 56,on ce samo u conzoli da ispise broj 56 i tjt.jer ,,jezik brzi od pameti''on je ispisao 56 samo a ovu drugu je zanemario.

// Domaci zadatak.
// Preko switch naredbe:
console.log(new Date ().getDay())
// ovo je da predstavi koji je dan ali u brojevima,ide od 0 do 6,0 je nedelja,subota 6.
// switch (new Date(),getDay())...
// Na osnovu vrednosti koju nam daje izraz iz switch naredbe kroz case-ove i eventualno default ispisati poruku:
// "Danas je radni dan."od ponedeljka do petka
// Ako pada vikend "Ugodno provedite vikend"