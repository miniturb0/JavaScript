let mainEl = document.querySelector("#main");

for (let i = 1; i < 9; i++) {
    for (let j = 1; j < 9; j++) {
        let rute = document.createElement("div");
        rute.id = "pos"+i+j
        rute.className = "rute"
        rute.addEventListener("click",showy)
        if ((i%2)^(j%2)) {
            rute.style.backgroundColor = "beige";
        }else{
            rute.style.backgroundColor = "brown";
        }
        mainEl.appendChild(rute);
    }
}

// setter pieces på riktig plass her nedover

let king = [document.querySelector("#pos14"), document.querySelector("#pos84")]
let queen = [document.querySelector("#pos15"), document.querySelector("#pos85")]
let allp = [king,queen]
let brett = []
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}


for (let i = 0; i < allp.length; i++) {
    for (let j = 0; j < 2; j++) {
        let img = document.createElement("img")
        img.id = allp[i][j].id+"img"
        img.src = "imgs/king.png"
        allp[i][j].appendChild(img)
    }
    
    
}
function showy(e) {
    let img = document.createElement("img")
    img.id = e.target.id+"img"
    img.src = "imgs/king.png"
    img.style.height = "75px"
    img.style.width = "75px"
    e.target.appendChild(img)
}

function gath(e) {
    
}