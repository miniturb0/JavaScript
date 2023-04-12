let mainT = document.querySelector("#Terninger");
let butT = document.querySelector("#terningkast")
function terning() {
    mainT.innerHTML= "";
    let kast = [];
    for (let i = 1; i < 7; i++) {
        let imgC = document.createElement("img");
        let numT = String(Math.ceil(Math.random()*6));
        imgC.src = "bilder/Terning"+numT+".png";
        imgC.class = numT;
        mainT.appendChild(imgC);
        kast.push(numT)
    }
    butT.style.display = "none";
    document.querySelector("#velg").style.display="inline";
    document.querySelector("#stryk").style.display="inline";

}
document.querySelector("#fireere").innerHTML = "HEi";

function velg() {
    
}

function stryk() {
    
}