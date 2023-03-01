function sortereTll(a,b) {
    return a-b
}
let tall = [5, 1 , 3 , 7]
tall.sort(sortereTall);
console.log(tall);

// sjekker om ordet x er likt om man leser det fra høyre eller til venstre,ved å returnere at ordet x er en palindrom hvis det blir lest likt fra begge veier og at det ikke er det hvis det er usant 
function palin(x) {
    let checky = "";
    for (let i = x.length; i > 0; i--) {
        checky+= x[i-1];  
    }
    if (x == checky) {
        return x+" er en palindrom"
    }return x+" er ikke en palindrom"
}
console.log(palin("kee'kk'eek"))



arry = ["hei", "jeg"];
arry.push("hei")
arry.shift()
arry.pop()
arry.splice(0,0,0,1,2,"hei")
console.log(arry)


function beregneSiffre(a) {
    let b = 0;
    for (let i = 0; i < a.length; i++) {
        b+= Number(a[i])
    }return b;
}

console.log(beregneSiffre("123"))