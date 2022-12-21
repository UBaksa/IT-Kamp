// Write a JavaScript program to find the largest of three given integers.


function naj(broj1,broj2,broj3){
    let max = broj1;
    if(broj2>max){
        max = broj2;
    }
    if(broj3>max){
        max = broj3;
    }
    return max;
}
console.log(naj(1,3,2))


function najveciBroj(prvi,drugi,treci){
    let max;
    if(prvi >= drugi && prvi >= treci){
        return "Priv broj je najveci broj"
    }
    else if( drugi > prvi && drugi > treci){
        return "Drugi broj je najveci broj."
    }
    else
    return "Treci je najveci."
}

// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values


function najblizi(prva,druga,treca){
    let prvii = 100 - prva;
    let drugaa = 100 - druga;
    let trecii = 100 - treca;
    if(prvii < drugaa && prvii < trecaa){
        return "Prvi broj je najblizi broj"
    }
    else if( drugaa < prvii && drugaa < trecaa){
        return "Drugi broj je najblizi broj."
    }
    else
    return "Treca je najbliza."
}


function bliziSto(prvi,drugi){
    const jedan = 100 - prvi;
    const dva = 100 - drugi;
    if(jedan<dva){
        return `Prvi broj je blizi broju 100.`
    }
    else{
        return `Drugi broj je blizi broju 100.`
    }
}

console.log(bliziSto(-10,40))
console.log(bliziSto())