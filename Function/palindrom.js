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





