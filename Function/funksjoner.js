function pluss(tall) {
    var sum = tall +tall;
    return sum
}
var sum = 0;
for (let i = 0; i < 5; i++) {
    sum += pluss(3);
    
}
console.log(sum);

function myndig(alder) {
    if (alder < 18) {
        return "ikke myndig"
    }
    return "myndig"
    

}
console.log("denne personen er "+myndig(17))

function terning() {
    let t = Math.ceil(Math.random()*6)
    return t
}

// for (let i = 0; i < 100; i++){
//     console.log(terning())
// }

let b = 0;
let a = 1;
for (let i = 0; i != a && a != b;){
    a = terning()
    b = i
    i = terning()
    if (a == b) {
        console.log(a);
    }else{
        console.log(a);
        console.log(i);
    }    
}
function toLike() {
    let t1 = terning()
    let t2 = terning()
    while (t1 != t2) {
        t1 = terning()
        t2 = terning()
    }
    return "terning"+t1+"t:"+t2
}
console.log(toLike())