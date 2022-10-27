// ispisati prvih 10 brojeva u konzoli jedan ispod drugog 
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

// petlja(loop)-predstavlja nacin da se neki kod izvrsi (uz odredjene uslove vise puta)

// for petlja - sintaksa:
// for(statement1; statement2; statement3){
//     // kod za izvrsavanje u svakoj iteraciji
// }

// statement1 predstavlja definisanje promenljive koja ce da predstavi iterator.
// statement2 predstavlja uslov(granicu)do koje vrednosti ce iterator da ide.
// statement3 predstavlja povecanje ili smanjenje iteratora  koje se desi na kraju svake iteracije 
// svi uslovi su obavezni!!!!
for(let i = 1; i <= 10; i++){
    console.log(i)
}

// ispisati brojeve od 1 do 10,izuzev broja 2 i broja 5

for(let i = 1;i < 11; i++){
    if(i!==2 && i!==5) {
    console.log(i);
    }
}
// continue keyword(rezervisana rec) ako se nadje u nekoj interaciji zapravo oznacava da se ta interacija zanemari i da se nastavi dalje sa sledecom
for(let i=1;i<11;i++){
    if(i === 2 || i === 5){
        continue;
    }
    else{
        console.log(i)
    }
}

// break keyword(rezervisana rec)predstavlja da od tog trenutka for petlja prestaje sa radom.

// ispisati sve brojeve od do 1 do 10,ako je neki broj deljiv sa 7,neka se prekine petlja

for(let i=1;i<11;i++){
    if(i%7===0){
        break
    }
    else{
        console.log(i)
    }
}
for(let i=1;i<21;i++){
    if(i%2 ===0){
        console.log(i)
    }
    else{
        continue   
    }
}
for (let i=2;i<21;i+=2){
  console.log(i)
}
