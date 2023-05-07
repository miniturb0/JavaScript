let inp = document.querySelectorAll(".inp");
let feilm = document.querySelector("#feilmelding");
let profile = document.querySelector("#profile");
let quackHref = document.querySelector("#quackLarge");
quackHref.addEventListener("click", () => {location.href = "createQuack.html"});
let topMLogo = document.querySelector("#topMLogo");
topMLogo.addEventListener("click", () => location.href = "index.html" );

// ting jeg ofte bruker som vi ikke har gått gjennom i timen
// jeg bruker .find funksjonen, den leter etter objekt for meg i en array
// .findIndex gjør det samme, men du får indexen i arrayen ikke selve objektet
// document.createRange().createContextualFragment bruker jeg som gjør at jeg kan skrive string og appende videre til et element
// jeg bruker mye en annen måte å skrive string på enn "", jeg bruker `` og så ${} for variabler inni


// hvis man ikke er logget inn blir man sendt til login page
if (localStorage.loggedIn == undefined && window.location.href.indexOf("signup.html") == -1 && window.location.href.indexOf("login.html") == -1) {
    location.href = "login.html";
}


// funksjon som lager et objekt
function quackObj(text, creator, number, form) {
    this.id = `${creator}${number}`;
    this.likes = [];
    this.comments = [];
    this.quack = text;
    this.isComment = form;
}
// funksjonen lagrer en tweet i localStorage
function createQuack() {
    let quack = document.querySelector("#quackT");
    if (quack.value == "") return
    let userData = JSON.parse(localStorage.getItem("userData"));
    // .findIndex finner indexen for meg istedenfor at jeg bruker for løkke og if statement
    let indexUsername = userData.findIndex(u => u.username == localStorage.loggedIn);
    let newQuack = new quackObj(quack.value, userData[indexUsername].username, userData[indexUsername].quacks.length + 1, false);
    userData[indexUsername].quacks.push(newQuack);
    localStorage.setItem("userData", JSON.stringify(userData));
    quack.value = "";
}
// denne funksjonen lager en kommentar, altså lagrer den i localStorage
function createReply() {
    let quack = document.querySelector("#quackTR");
    if (quack.value == "") return
    let userData = JSON.parse(localStorage.getItem("userData"));
    // .findIndex finner indexen for meg istedenfor at jeg bruker for løkke og if statement
    let indexUsername = userData.findIndex(u => u.username == localStorage.loggedIn);
    let newQuack = new quackObj(quack.value, userData[indexUsername].username, userData[indexUsername].quacks.length + 1, true);
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
    localStorage.quack = e.currentTarget.id;
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

// her bruker jeg da js for å endre i css, i css har jeg da en css for et element når den har innerfocus
searchInput.addEventListener('focus', () => {
    searchbar.classList.add('focused');
});
searchInput.addEventListener('blur', () => {
    searchbar.classList.remove('focused');
});

let searchResults = document.querySelector("#searchResults");
let displayDivs = searchResults.querySelectorAll("div");

// dette er en søke funksjon til søke baren
// her finner den alle objektene innenfor userData arrayen som inneholder da
// lowercasen til søkefelt verdien, dette er for at det er lettere for folk å søke på noen
// så man ikke bare trenger å matche alt, den tar maksimalt 8
function search() {
    if (searchInput.value == "") {
        for (let i = 0; i < displayDivs.length; i++) {
            displayDivs[i].innerHTML = "";
        }
        return
    }
    let userData = JSON.parse(localStorage.getItem("userData"));
    let searchTerm = searchInput.value.toLowerCase();
    let filteredPeople = userData.filter(u => u.username.toLowerCase().includes(searchTerm)).slice(0, 8);
    console.log(filteredPeople)
    for (let i = 0; i < displayDivs.length; i++) {
        displayDivs[i].innerHTML = "";
        displayDivs[i].removeEventListener("click", accessProfileQuack)
    }
    for (let i = 0; i < filteredPeople.length; i++) {
        filteredPeople[i].username;
        // gjøre mulig å appende searched user videre med koden under
        // under bruker jeg en måte å skrive string på hvor man har ${}hvor man kan skrive variabler i og `` rundt for å si at det inni er string
        let searchedUser = document.createRange().createContextualFragment(
            `<div class="searchResultsContainer">
            <img src="bilder/${filteredPeople[i].profilePicture}" alt="">
            <div class="quacksUsernameAtReply">
                <div>
                    <div class="quacksUsernameReply" style="color:white;">${filteredPeople[i].displayname}</div>
                    <div class="quacksAtReply" style="margin-top: 0px;">@${filteredPeople[i].username}</div>
                </div>
            </div>

        </div>`
        )
        displayDivs[i].appendChild(searchedUser);
        displayDivs[i].addEventListener("click", accessProfileQuack);
    }
}
searchInput.addEventListener("input", search);


let home = document.querySelector("#homeIcon");
let settings = document.querySelector("#settingsIcon");
let profileI = document.querySelector("#profileIcon");
// legger til lenker til logoene til venstre side
home.addEventListener("click", () => location.href = "index.html");
settings.addEventListener("click", () => location.href = "settings.html");
profileI.addEventListener("click", () => {
    localStorage.profile = localStorage.loggedIn
    location.href = "profile.html"
});


// her om det da er light eller dark theme bestemmer jeg variabler jeg har i css, for da å passe themen
if (localStorage.theme == "light") {
    document.documentElement.style.setProperty("--background-color", "white");
    document.documentElement.style.setProperty("--background-colorOp", "black")
    document.documentElement.style.setProperty("--backgroundSee-color", "rgba(255,255, 255, 255.90)");
    document.documentElement.style.setProperty("--color", "black");
    document.documentElement.style.setProperty("--colorOp", "white");
} else {
    document.documentElement.style.setProperty("--background-color", "black");
    document.documentElement.style.setProperty("--background-colorOp", "white")
    document.documentElement.style.setProperty("--backgroundSee-color", "rgba(0, 0, 0, 0.90)");
    document.documentElement.style.setProperty("--color", "white");
    document.documentElement.style.setProperty("--colorOp", "black");
}




