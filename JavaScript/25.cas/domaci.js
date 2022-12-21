function udaljenost(broj,broj1){
    let i
    let brojac1=0
    let brojac2=0
    if(broj>100)
        for(broj;i>=100;i--)
        brojac1++
    else  
    for(i=broj;i<=100;i++)brojac1++
        if(broj1>100)
        for(i=broj1;i>=100;i--)
        brojac2++
    else 
        for(i=broj1;i<=100;i++)brojac2++
        if(brojac1>brojac2){
        return broj1
        }
        else if(brojac1==brojac2){
        return "Isto su udaljeni"}
        else 
        return broj}
    

console.log(udaljenost(51,149))







// 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.