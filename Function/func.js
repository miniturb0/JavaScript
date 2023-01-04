function heiVerden() {
    console.log("hei verden")
}

heiVerden();


function tilfeldigHilsen() {
    arraye = ["hei", "hallo", "god dag"];
    console.log(arraye[Math.floor(Math.random()*3)]);
}

tilfeldigHilsen();

function m8() {
    arraye = ["go", "nei", "ja", "aldri", "med en gang",];
    console.log(arraye[Math.floor(Math.random()*arraye.length)]);
}
m8();

function skrivUtStjerner() {
    let stj = "";
    for (let i = 0; i < 5; i++) {
        stj += "*";
        console.log(stj);
        
    }
}
function kvadrat(a) {
    console.log(String(a*a));
}
kvadrat(6);

function sum(x,y) {
    console.log(String(x+y));
}
sum(10,5);

function areale(x) {
    console.log("Arealet til sirkelen med "+x+ " som radius får areal " + Math.PI*(x**2))
}
areale(2)

function navneSkilt(navn) {
    let stj = "";
    for (let i = 0; i < navn.length +2; i++) {
        stj+= "*";
    }
    console.log(stj);
    console.log("*"+navn + "*")
    console.log(stj)
}
navneSkilt("madagaskar")