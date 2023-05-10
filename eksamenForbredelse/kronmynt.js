let runder = document.querySelector("#runder");
let button =document.querySelector("button");
let antallRunderV = 0;

function antallRunder() {
    if (runder.value%2==0 || runder.value < 0) return;
    antallRunderV = Number(runder.value);
}
function kronMynt(valg) {
    let random = Math.ceil(Math.random()*2);
    if (random == 1 && valg == "kron")   {
        console.log("du tapte");
    }else{
        console.log("du vant");
    } 
}


function spille() {
    for (let i = 0; i < antallRunderV; i++) {
        
    }

}