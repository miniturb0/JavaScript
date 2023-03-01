let forklaringEl = document.querySelector("h2");
forklaringEl.innerHTML = "Velg en var dørene, en av dem har en bil bak seg. De to andre har geiter."
let dorer = document.querySelectorAll("img");


function velgeDor(e) {
    forklaringEl.innerHTML = "du har valgt nummer"+ Number(Number(e.target.id[3])+1)+". Vil du bytte"
    let tilf = Math.floor(Math.random()*3)
    for (let i = 0; i < 3; i++) {
        if (i == tilf) {
            dorer[i].alt = "bil"
            dorer[i].src = "LOTR.png"
        }else{
            dorer[i].alt = "geit"
            dorer[i].src = "LOTR.png"
        }
        dorer[i].removeEventListener("click",velgeDor)
    }
    let x = 0
    for (let i = 0; i < 3; i++) {
        if ((i != e.target.id[3] && dorer[i].alt =="geit")&& x == 0) {
            forklaringEl.innerHTML += dorer[i].id + "er åpnet"
            dorer[i].src = "bilde-z1-geit-dm10792.webp"
            x++
        }else{
            dorer[i].addEventListener("click",bytteDor)
        }
    }
}
function bytteDor(e) {
    for (let i = 0; i < 3; i++) {
        dorer[i].removeEventListener("click",bytteDor)
        if (dorer[i].alt == "geit") {
            dorer[i].src = "bilde-z1-geit-dm10792.webp"
        }else{
            dorer[i].src = "images.jpg"
        }
    }
    if (e.target.alt == "bil") {
        forklaringEl.innerHTML = "du vant en bil"
        document.querySelector("p").innerHTML = Number(document.querySelector("p").innerHTML)+1
    }else{
        forklaringEl.innerHTML = "du vant en geit"
    }
}


for (let i = 0; i < 3; i++) {
    dorer[i].addEventListener("click",velgeDor)
}

function bilder() {
    for (let i = 0; i < 3; i++) {    
            dorer[i].src = "LOTR.png"
    }
}

function restart() {
    bilder()
    for (let i = 0; i < 3; i++) {
        dorer[i].addEventListener("click",velgeDor)
    }
}
