// limunada domaci...

function limunada(par1,par2){
    const ukupnoFlasa = Math.trunc(par2 / par1) //ili flow.
    if(par1 > 5 || par1 <=0 || isNaN(par1)){
        return "Zapremina flase mora biti izmedju 0 i 5l.";
    }
    else if(par2 > 50 || par2<=0 || isNaN(par2)){
        return "Zapremina limunade mora da bude izmedju 0 i 50 litara."
    }
    else{
    return "Sa datim zapreminama mozemo napuniti " + ukupnoFlasa + "flasa limunade."
    }
}
console.log(limunada(1,40))