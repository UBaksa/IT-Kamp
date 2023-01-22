// function array (){
// const unos = prompt("Unesite neku recenicu.");
// const arr = unos.split(",");
// if(arr.some(function(element){
// return element === "jagoda";
// }))
// return "Jagoda se nalazi na ${arr.indexOf("jagoda")+1}mestu";
// }
// else {
//     arr.sort()
//     arr.unshift(10)
//     arr.push(100);

//     return arr
// }
const prom1 = 55; //55
const prom2 = !55; ///alse
const prom3 = !!55; //true
// bolje je da se pise kad se proverava npr u if broj,bolje da se stavi !!ispred broja,pretvara ga u boolean i daje truthy jer ga posmatra ko boolean,a ako se ne stavi posmatra ga ko broj i puca...
const prom4 = !!true; //true

const prom5 = !""; //true

const prom6 = !(55 + ""); //false

console.log(prom1);
console.log(prom2);
console.log(prom3);
console.log(prom4);
console.log(prom5);
console.log(prom6);
