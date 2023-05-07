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

let startingUserData = [
    {
        "username": "elonmusk",
        "displayname": "Elon Musk",
        "password": "123",
        "followers": [],
        "following": [],
        "bio": "",
        "quacks": [
            {
                "id": "elonmusk1",
                "likes": [],
                "comments": [],
                "quack": "I propose the LMFAO test for AI",
                "isComment": false
            },
            {
                "id": "elonusk2",
                "likes": [],
                "comments": [],
                "quack": "The data with which the Federal Reserve is making decisions has too much latency",
                "isComment": false
            },
            {
                "id": "elonmusk3",
                "likes": [],
                "comments": [],
                "quack": "We live in the most interesting of times",
                "isComment": false
            },
            {
                "id": "elonmusk4",
                "likes": [],
                "comments": [],
                "quack": "It’s a fact. Let that sink in.",
                "isComment": true
            },
            {
                "id": "elonmusk5",
                "likes": [],
                "comments": [],
                "quack": "May the 4th be with you ❤️",
                "isComment": false
            },
            {
                "id": "elonmusk6",
                "likes": [],
                "comments": [],
                "quack": "Cult / Culture",
                "isComment": false
            }
        ],
        "like": [],
        "banner": "#80abc6",
        "profilePicture": "ElonMusk.png"
    },
    {
        "username": "Macaiyla",
        "displayname": "Macaiyla",
        "password": "123",
        "followers": [],
        "following": [],
        "bio": "i do not care. shit poster. tyler1’s maid. who asked tho?",
        "quacks": [
            {
                "id": "Macaiyla1",
                "likes": [],
                "comments": [],
                "quack": "My green juice mix just came in the mail yall I’m about to start drinking this shit since I hate veggies. U think my kitty gonna be good for my man now? It’s like takin your dirty dodge ram to the car wash after a year of muddin",
                "isComment": false
            },
            {
                "id": "Macaiyla2",
                "likes": [],
                "comments": [],
                "quack": "Adhd is me putting on my shoes and walking out of the house with mouth wash still in my mouth",
                "isComment": false
            },
            {
                "id": "Macaiyla3",
                "likes": [],
                "comments": [],
                "quack": "I support y’all writers striking but please…I think I speak for all marvel fans when I say the writers of Love and Thunder should be unemployed and broke forever",
                "isComment": false
            }
        ],
        "like": [],
        "banner": "#483b2e",
        "profilePicture": "Macaiyla.png"
    },
    {
        "username": "stats_feed",
        "displayname": "World Of Statistics",
        "password": "123",
        "followers": [],
        "following": [],
        "bio": "There are three kinds of lies: lies, damned lies, and statistics.",
        "quacks": [
            {
                "id": "stats_feed1",
                "likes": [],
                "comments": [],
                "quack": "Only 8% of people manage to keep their New Year’s resolutions.",
                "isComment": false
            },
            {
                "id": "stats_feed2",
                "likes": [],
                "comments": [],
                "quack": "It's estimated that 1 in 8 Americans in the workforce have worked at McDonald's at some point.",
                "isComment": false
            },
            {
                "id": "stats_feed3",
                "likes": [],
                "comments": [],
                "quack": "More than 10% of the world’s salt is used to de-ice American roads.",
                "isComment": false
            },
            {
                "id": "stats_feed4",
                "likes": [],
                "comments": [],
                "quack": "Number of rocket launches since the start of the space age in 1957:  ~ 6380 🚀",
                "isComment": false
            },
            {
                "id": "stats_feed5",
                "likes": [],
                "comments": [],
                "quack": "The average public swimming pool contains 75 litres of urine.",
                "isComment": false
            },
            {
                "id": "stats_feed6",
                "likes": [],
                "comments": [],
                "quack": "The human eye blinks an average of 4,200,000 times a year.",
                "isComment": false
            }
        ],
        "like": [],
        "banner": "#ffffff",
        "profilePicture": "WorldOfStatistics.png"
    },
    {
        "username": "jordanbpeterson",
        "displayname": "Dr Jordan",
        "password": "123",
        "followers": [],
        "following": [],
        "bio": "Best-Selling Author | Clinical Psychologist | #1 Education Podcast |",
        "quacks": [
            {
                "id": "jordanbpeterson1",
                "likes": [],
                "comments": [],
                "quack": "Ford should open a bank",
                "isComment": false
            },
            {
                "id": "jordanbpeterson2",
                "likes": [],
                "comments": [],
                "quack": "I asked ChatGPT about anxiety self-management and it said that because it didn't have a body it wasn't necessary",
                "isComment": false
            },
            {
                "id": "jordanbpeterson3",
                "likes": [],
                "comments": [],
                "quack": "No cars for you peasants. Stay at home and crunch your juicy bugs.",
                "isComment": false
            }
        ],
        "like": [],
        "banner": "#6e726e",
        "profilePicture": "JordanPeterson.png"
    },
    {
        "username": "cb_doge",
        "displayname": "DogeDesigner",
        "password": "123",
        "followers": [],
        "following": [],
        "bio": "UX/UI & Graphic Designer at Dogecoin & MyDoge Inc.",
        "quacks": [
            {
                "id": "cb_doge1",
                "likes": [],
                "comments": [
                    "ElonMusk4"
                ],
                "quack": "Fun fact- Elon Musk's Birthday is 69 days after 4/20",
                "isComment": false
            }
        ],
        "like": [],
        "banner": "#3c96c3",
        "profilePicture": "DogeDesigner.png"
    },
    {
        "username": "LinusTech",
        "displayname": "Linus Tech Tips",
        "password": "123",
        "followers": [],
        "following": [],
        "bio": "The official Quacker of the Linus Tech Tips and Techquickie YouTube channels.",
        "quacks": [
            {
                "id": "LinusTech1",
                "likes": [],
                "comments": [],
                "quack": "is your boss really a boss if they dont eat lunch on the floor like a kindergartner",
                "isComment": false
            },
            {
                "id": "LinusTech2",
                "likes": [],
                "comments": [],
                "quack": "Trying to settle a debate here, which one is the better meme??? Linus selfie or sad linus",
                "isComment": false
            },
            {
                "id": "LinusTech3",
                "likes": [],
                "comments": [],
                "quack": "tech tip: the reason you're bad at the game is probably not your pc",
                "isComment": false
            }
        ],
        "like": [],
        "banner": "#e65828",
        "profilePicture": "LinusTech.png"
    }
]

if (!localStorage.userData) {
    localStorage.userData = startingUserData;
}
