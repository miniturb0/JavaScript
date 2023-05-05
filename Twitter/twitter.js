let inp = document.querySelectorAll(".inp");
let feilm = document.querySelector("#feilmelding");
let profile = document.querySelector("#profile");
let quackHref = document.querySelector("#quackLarge");
quackHref.addEventListener("click",() => {location.href = "createQuack.html"});
let topMLogo = document.querySelector("#topMLogo");
topMLogo.addEventListener("click", () => {location.href = "index.html"});
// utfører funksjonen nedenfor når siden har blitt lastet inn
window.onload = function () {
    if (localStorage.loggedIn == undefined && window.location.href.indexOf("signup.html") == -1 && window.location.href.indexOf("login.html") == -1) {
        location.href = "login.html";
        return
    } else if (profile) {
        profile.innerHTML = localStorage.loggedIn;
    }
}
let toFollow = document.querySelector("#toFollow");
let Data = JSON.parse(localStorage.getItem("userData"));
for (let i = 0; i < Data.length; i++) {
    let divC = document.createElement("div");
    divC.innerHTML = Data[i].username
    divC.addEventListener("click", () => {
        localStorage.profile = divC.innerHTML
        location.href = "profile.html"
    })
    toFollow.appendChild(divC)
}
// bruke e.target.getElementsByTagName("div") for å muligens gjøre click area
// større, da må også endre index.js kode for å lage en div rundt både img og username


// funksjon som lager et objekt med en default parameter som blir original hvis den ikke blir bestemt når funkjsoin blir utført
function quackObj(text,creator,number,form) {
    this.id = `${creator}${number}`;
    this.likes = [];
    this.comments = [];
    this.quack = text;
    this.isComment = form;
}
function createQuack() {
    let quack = document.querySelector("#quackT");
    if (quack.value == "") return
    let userData = JSON.parse(localStorage.getItem("userData"));
    // finner indexen for meg istedenfor at jeg bruker for løkke og if statement
    let indexUsername = userData.findIndex(u => u.username == localStorage.loggedIn);
    let newQuack = new quackObj(quack.value,userData[indexUsername].username,userData[indexUsername].quacks.length+1,false);
    userData[indexUsername].quacks.push(newQuack);
    localStorage.setItem("userData", JSON.stringify(userData));
    quack.value = "";
}
function createReply() {
    let quack = document.querySelector("#quackT");
    if (quack.value == "") return
    let userData = JSON.parse(localStorage.getItem("userData"));
    // u.findIndex finner indexen for meg istedenfor at jeg bruker for løkke og if statement
    let indexUsername = userData.findIndex(u => u.username == localStorage.loggedIn);
    let newQuack = new quackObj(quack.value,userData[indexUsername].username,userData[indexUsername].quacks.length+1,true);
    userData[indexUsername].quacks.push(newQuack);
    localStorage.setItem("userData", JSON.stringify(userData));
    // her finner jeg quacken som blir repllyet til for å legge til IDen til commenten i comments arrayen
    let indexQuack = userData.find(u => u.username == localStorage.quackProfile);
    let theQuack = indexQuack.quacks.find(i => i.id == localStorage.quack);
    let quackId = `${userData[indexUsername].username}${userData[indexUsername].quacks.length}`;
    theQuack.comments.push(quackId);
    localStorage.setItem("userData", JSON.stringify(userData));
    quack.value = "";
    window.location.reload();
}
function accessQuack(e) {
    localStorage.quack =  e.currentTarget.id;
    localStorage.quackProfile = e.currentTarget.slot;
    location.href = "tweet_quack.html"
}
function accessProfile(e) {
    localStorage.profile = e.currentTarget.querySelector(".quacksAt").innerHTML.slice(1)
    location.href = "profile.html"
}
function accessProfileQuack(e) {
    localStorage.profile = e.target.parentElement.querySelector(".quacksAtReply").innerHTML.slice(1);
    location.href = "profile.html"
}

let searchInput = document.querySelector('#searchInput');
let searchbar = document.querySelector('#searchbar');
searchInput.addEventListener('focus', () => {
    searchbar.classList.add('focused');
});
searchInput.addEventListener('blur', () => {
    searchbar.classList.remove('focused');
});


// dette er en søke funksjon til søke baren
// her finner den alle objektene innenfor userData arrayen som inneholder da
// lowercasen til søkefelt verdien, dette er for at det er lettere for folk å søke på noen
// så man ikke bare trenger å matche alt
function search() {
    let searchTerm = searchInput.value.toLowerCase();
    let filteredPeople = userData.filter(u => u.username.toLowerCase().includes(searchTerm));

}
searchInput.addEventListener("input", search);




// denne funksjonen brukes blant annet når vi lager en ny tweet, slik at den vet konteksten, fordi det må være på en ny side i følge oppgaven.
function hentURLSearchParams() { // returnerer en json-objekt med alle url parametrene
    let urlSearchParams = new URLSearchParams(window.location.search) // https://stackoverflow.com/a/901144, det ser ut som å bruke Proxy er 25% raskere, men dette er mer lesbart og forståelig
    return Object.fromEntries(urlSearchParams.entries());
}
// gjør det motsatte av hentURLSearchParams. for eksempel paramifyLink("index.html", {"brukernavn": "admin"}) returnerer "index.html?brukernavn=admin"
function paramifyLink(url, json) {
    let urlSearchParams = new URLSearchParams(json);
    window.location.search = `${url}?${urlSearchParams.toString()}`;
    return `${url}?${urlSearchParams.toString()}`;
}