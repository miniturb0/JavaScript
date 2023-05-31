let input1 = document.querySelector("#rektangel1Input");
let input2 = document.querySelector("#rektangel2Input");
let rektangel1 = document.querySelector("#rektangelen1");
let rektangel2 = document.querySelector("#rektangelen2");
let firkantInput = document.querySelectorAll(".firkantInput");
let arealet = document.querySelector("#arealet");
let tabell = document.querySelector("tbody");
let tidligereBredder = [];

function lageFirkant(input) {
    let bredde = Number(input.value);
    if (tidligereBredder.length == 9) {
        arealet.innerHTML = "du har brukt opp alle bredder";
        return;
    }
    if (input.value > 9 || input.value < 1 || tidligereBredder.indexOf(bredde)!=-1) {
        arealet.innerHTML = "skriv inn bredde som er mindre eller lik 9 og større elle lik 1, du kan heller ikke skrive inn samme verdi flere ganger"
        return;
    }
    let rektangel = document.createElement("div");
    tidligereBredder.push(bredde);
    if (tidligereBredder.length == 9) {
        arealet.innerHTML
    }
    let hoyde = 10-bredde;
    rektangel.style.width = `${bredde*50}px`;
    rektangel.style.height = `${hoyde*50}px`;
    rektangel.style.border = "solid blue 3px";
    rektangel.addEventListener("click",areal);
    document.querySelector("body").appendChild(rektangel);
}

function areal(e) {
    let width = e.target.style.width;
    width = width.substring(0,width.length-1);
    width = Number(width.substring(0,width.length-1))/50;
    let height = e.target.style.height;
    height = height.substring(0,height.length-1);
    height = Number(height.substring(0,height.length-1))/50;
    let areal = width*height;
    arealet.innerHTML = `${areal}`;
}

function firkantSpes() {
    let bunn = firkantInput[0].value;
    let topp = firkantInput[1].value;
    let hoyde = firkantInput[2].value;
    let forskyvning = firkantInput[3].value;
    let type = "";
    let areal = bunn*hoyde;
    if (bunn == topp && bunn == hoyde && forskyvning == 0) {
        type = "kvadrat";
    }else if (bunn == topp && bunn != hoyde) {
        type = "rektangel";
    }else if (bunn == topp && forskyvning != 0) {
        type = "parallellogram";
    }else{
        type = "trapes";
        areal = ((Number(bunn)+Number(topp))/2)*hoyde;
    }
    let tr = document.createElement("tr");
    let list6 = [type, bunn, topp, hoyde, forskyvning, areal]
    for (let i = 0; i < 6; i++) {
        let td = document.createElement("td");
        td.innerHTML = list6[i];
        tr.appendChild(td);
    }
    tabell.appendChild(tr);
}
