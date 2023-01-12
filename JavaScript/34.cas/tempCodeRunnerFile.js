function(niz){
    let novi = []
    for(let i=1;i<niz.length;i++){
        for(let j=i;j<niz.length;j++){
            if(niz[i] === niz[j]){
                novi.push(niz[i])
        }
    }
    return novi;
}
}