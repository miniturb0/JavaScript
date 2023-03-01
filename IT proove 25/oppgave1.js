let aarstall = [];
let skuddaar = [];
function aar(a) {
    for (let i = 1900; i < a+1; i++) {
        aarstall.push(i)
    }
}

function henteSkuddaar(){
    for (let i = 0; i < aarstall.length; i++) {
        if (((aarstall[i] % 4 == 0) && (aarstall[i] % 100 != 0)) || aarstall[i] % 400 == 0){
           skuddaar.push(aarstall[i])
        }
    }
}

aar(2200)
henteSkuddaar()
console.log(aarstall)
console.log(skuddaar)
function LiviaBursdag(start,slutt) {
    for (let i = start; i < slutt+1; i++) {
        if (skuddaar.indexOf(i)!=-1) {
            console.log("Hurra! i år "+i+" kan du feire bursdag")
        }
    }
}
LiviaBursdag(2004,2060)
