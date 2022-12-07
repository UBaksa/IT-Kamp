function cokoladice(par1,par2){
    const ukupnoPoklon = Math.trunc(par2/par1);
    // par2 broj cokoladica,a par1 broj cokoladica koliko moze u poklonu.
    if(par2 <= 0 || par2 > 1000 || isNaN(par2)){
        return "Alo ukupno cokoladica mora biti do 1000 i ne sme da nema nijedna!"
    } 
    else if(par1 <= 0 || par1 > 20 || isNaN(par1)){
        return "Mora da ima od 1 do 20 cokoladica u poklonu i nista drugo!"
    }
    else
    return `Za "2023 Novu godinu" moze da se spakuje ${ukupnoPoklon} poklona sa ${par1}. cokoladica :>.`
}
console.log(cokoladice(15,1000))