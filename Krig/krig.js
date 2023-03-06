let visKort = document.querySelector("#viseKort")
let poengTeller = document.querySelector("#poeng")
let kortTeller = document.querySelector("#kortIgjen")
let allerede = []
let randInt = String(Math.ceil(Math.random()*13))
let randT = Math.floor(Math.random()*4)
let T = ["H","K","R","S"]
let Type = T[randT]
if (randInt < 10) {
    randInt = "0"+randInt
}
let kort ="Kortstokk/"+Type+randInt+".png"
visKort.src = kort
function nyttKort() {
    let randInt = String(Math.ceil(Math.random()*13))
    let randT = Math.floor(Math.random()*4)
    let T = ["H","K","R","S"]
    let Type = T[randT]
    if (randInt < 10) {
        randInt = "0"+randInt
    }
    let kort ="Kortstokk/"+Type+randInt+".png"
    if (allerede.indexOf(kort) != -1) {
        nyttKort()
        return
    }else if (allerede.indexOf(kort) == -1) {
        visKort.src = kort
        allerede.push(kort)
    }
    if (allerede.length == 52) {
        kortTeller.innerHTML = "du er ferdig"
        document.querySelector("#bakside").src = ""
        return
    }
    visKort.src = kort
    kortTeller.innerHTML = Number(kortTeller.innerHTML)-1
}
function bedre() {
    let gammel = visKort.src
    nyttKort()
    let ny = visKort.src
    let nyValue = 0;
    let gammelValue = 0;
    if (ny[59] != 0 && gammel[59] != 0) {
        nyValue = String(ny[59])+String(ny[60])
        gammelValue = String(gammel[59])+String(gammel[60])
    }else if (gammel[59] == 0 && ny[59]!=0) {
        gammelValue = gammel[60]
        nyValue = String(ny[59])+String(ny[60])
    }else if (ny[59] == 0 && gammel[59] !=0) {
        nyValue = ny[60]
        gammelValue = String(gammel[59])+String(gammel[60])
    }else{
        nyValue = ny[60]
        gammelValue = gammel[60]
    }
    if (Number(nyValue) > Number(gammelValue)) {
        document.querySelector("#poeng").innerHTML = String(Number(document.querySelector("#poeng").innerHTML)+1)
    }
}
function dårligere() {
    let gammel = visKort.src
    nyttKort()
    let ny = visKort.src
    let nyValue = 0;
    let gammelValue = 0;
    if (ny[59] != 0 && gammel[59] != 0) {
        nyValue = String(ny[59])+String(ny[60])
        gammelValue = String(gammel[59])+String(gammel[60])
    }else if (gammel[59] == 0 && ny[59]!=0) {
        gammelValue = gammel[60]
        nyValue = String(ny[59])+String(ny[60])
    }else if (ny[59] == 0 && gammel[59] !=0) {
        nyValue = ny[60]
        gammelValue = String(gammel[59])+String(gammel[60])
    }else{
        nyValue = ny[60]
        gammelValue = gammel[60]
    }
    if (Number(nyValue) < Number(gammelValue)) {
        document.querySelector("#poeng").innerHTML = String(Number(document.querySelector("#poeng").innerHTML)+1)
    }
}
function restart() {
    allerede = [];
    kortTeller.innerHTML = 52;
    document.querySelector("#poeng").innerHTML = 0;
    document.querySelector("#bakside").src = "Kortstokk/Kortstokk_bakside.png"
}