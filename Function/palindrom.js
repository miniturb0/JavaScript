function palin(x) {
    let checky = "";
    for (let i = x.length; i > 0; i--) {
        checky+= x[i-1];  
    }
    if (x == checky) {
        return x+" er en palindrom"
    }return x+" er ikke en palindrom"
}
console.log(palin("kekek"))





