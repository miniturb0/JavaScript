let inpu = document.querySelectorAll("input")
let nydiv = document.createElement("div")



let body = document.querySelector("#main2")
document.querySelector("button").addEventListener("click",blogg)
function blogg() {
    let nydiv = document.createElement("div")
    nydiv.style.border = "solid 2px";
    nydiv.style.backgroundColor = "#2F455C"
    body.appendChild(nydiv)
    let nyh = document.createElement("h2")
        nyh.innerHTML = inpu[0].value
        nydiv.appendChild(nyh)
    for (let i = 1; i < inpu.length; i++) {
        let nyp = document.createElement("p")
        nyp.innerHTML = inpu[i].value
        if (i==2) {
            nyp.style.fontFamily = "Tangerine";
            nyp.style.fontSize = "25px";
        }
        nydiv.appendChild(nyp)
    }
}