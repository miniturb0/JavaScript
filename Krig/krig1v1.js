let poeng = document.getElementById("kortTom")
let knapper = document.querySelectorAll(".k1")
for (let i = 0; i < knapper.length; i++) {
    knapper[i].addEventListener("click", gjett);
}
let poengSum = 0;
let gammelVerdi = 0;
let kortstokk = [];
let typer = ["H","K","R","S"]
for (let i = 0; i < typer.length ; i++) {
    for (let j = 1; j <= 13; j++) {
        if (j >= 10) {
            kortstokk.push(typer[i]+j+".png")
        }else{
            kortstokk.push(typer[i]+"0"+j+".png")
        }
    }
}
poeng.innerHTML = poengSum;
function gjett(e) {
    let kort = document.getElementById("lagtUt");
    let tilf = Math.floor(Math.random()*kortstokk.length);
    kort.src = "Kortstokk/"+kortstokk[tilf]
    let verdi = 0
    if (Number(kortstokk[tilf][1]) === 0){
        verdi = Number(kortstokk[tilf][2]);
    }
    else{
        verdi = Number(kortstokk[tilf][1]+kortstokk[tilf][2]);
    }
    if (gammelVerdi < verdi && e.target.id == "+"){
        poengSum++;
    }
    if (gammelVerdi > verdi && e.target.id == "-"){
        poengSum++;
    }
    gammelVerdi = verdi
    poeng.innerHTML = poengSum;
    kortstokk.splice(tilf,1);
}
function start() {
    let kort = document.getElementById("lagtUt");
    let tilf = Math.floor(Math.random()*kortstokk.length);
    kort.src = "Kortstokk/"+kortstokk[tilf]
    if (kortstokk[tilf][1] == 0){
        gammelVerdi = Number(kortstokk[tilf][2]);
    }
    else{
        gammelVerdi = Number(kortstokk[tilf][1]+kortstokk[tilf][2]);
    }
    kortstokk.splice(tilf,1);
}
start();
let allerede =  [];
let kort1 = [];
let kort2 = [];
function nyttKort(k) {
    let randInt = String(Math.ceil(Math.random()*13))
    let randT = Math.floor(Math.random()*4)
    let T = ["H","K","R","S"]
    let Type = T[randT]
    if (randInt < 10) {
        randInt = "0"+randInt
    }
    let kort = Type+randInt
    if (allerede.indexOf(kort) != -1) {
        nyttKort(k)
        return
    }else if (allerede.indexOf(kort) == -1) {
        allerede.push(kort)
        k.push(kort)
    }
    if (allerede.length == 52) {
        return
    }
}
for (let i = 0; i < 52; i++) {
    if (i%2 == 0) {
        nyttKort(kort1)
    }else{
        nyttKort(kort2)
    }
}
function neww() {
    let krigOver = []
    for (let i = 0; i < 3; i++) {
        let rand1 = Math.floor(Math.random()*kort1.length)
        let rand2 = Math.floor(Math.random()*kort2.length)
        krigOver.push(kort1[rand1])
        krigOver.push(kort2[rand2])
        kort1.splice[rand1,1]
        kort2.splice[rand2,1]
    }
    return krigOver
}
function nytt() {
    let rand1 = Math.floor(Math.random()*kort1.length)
    let rand2 = Math.floor(Math.random()*kort2.length)
    krig1.src = "Kortstokk/"+kort1[rand1]+".png"
    krig2.src = "Kortstokk/"+kort2[rand2]+".png"
}
let krig1 = document.querySelector("#krig1")
let krig2 = document.querySelector("#krig2")
let verdi1 = "";
let verdi2 = "";
function sloss() {
    if (kort1=="") {
        document.querySelector("#krigOverskrift").innerHTML = "Spiller 2 vant"
        return
    }else if (kort2=="") {
        document.querySelector("#krigOverskrift").innerHTML = "Spiller 1 vant"
        return
    }
    let rand1 = Math.floor(Math.random()*kort1.length)
    let rand2 = Math.floor(Math.random()*kort2.length)
    krig1.src = "Kortstokk/"+kort1[rand1]+".png"
    krig2.src = "Kortstokk/"+kort2[rand2]+".png"
    if (kort1[rand1][1]==0) {
        verdi1 = kort1[rand1][2]
    }else{
        verdi1 = kort1[rand1][1]+kort1[rand1][2]
    }if (kort2[rand2][1]==0) {
        verdi2 = kort2[rand2][2]
    }else{
        verdi2 = kort2[rand2][1]+kort2[rand2][2]
    }
    if (Number(verdi1) == Number(verdi2)) {
        sloss()
        return
    }else if (Number(verdi1) > Number(verdi2)) {
        kort1.push(kort2[rand2])
        kort2.splice(kort2.indexOf(kort2[rand2]),1)
    }else{
        kort2.push(kort1[rand1])
        kort1.splice(kort1.indexOf(kort1[rand1]),1)
    }
    document.querySelector("#kortTeller1").innerHTML = kort1.length
    document.querySelector("#kortTeller2").innerHTML = kort2.length
}