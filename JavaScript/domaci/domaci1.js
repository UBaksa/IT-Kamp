// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.
// liveServer.settings.ignoreFiles":["**"]
for(i=1;i<20;i++){
    if(i%2 !== 0){
    console.log(i)
    }
}
for(i=1;i<20;i=i+2){
    console.log(i)
}
for(i=50;i<=100;i++){
   if(i%5 ===0){
    console.log(i)
   }
   else{
    continue
   }
}