let side = document.querySelector(".side");
let userData = JSON.parse(localStorage.getItem("userData"));
let forYou = document.querySelector("#forYou");
let following = document.querySelector("#following");
forYou.addEventListener("click", forYouFollowing)
following.addEventListener("click", forYouFollowing)

// funksjonen gjør at når man trykker på forYou elementet
// så lagrer den det i sessionStorage
function forYouFollowing(e) {
    sessionStorage.forYouFollowing = "forYou";
    if (e.target.id == "following") {
        sessionStorage.forYouFollowing = "following";
    }
    window.location.reload()
}
// funksjonen gjør om rekkefølgen i arrayen tilfeldig
// fikk den fra chatGPT
// starter bakerts i arrayen og bytter ut elementet i for det tilfeldige elementet j
// dette blir gjort med [array[i], array[j]] = [array[j], array[j]]
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// koden under endrer på innholdet på siden basert på om sessionStorage er forYou
// altså den tar enten alle quacks og appender det på siden eller bare de du følger
if (sessionStorage.forYouFollowing == "forYou") {
    let userData = JSON.parse(localStorage.getItem("userData"));
    forYou.style.borderBottom = "solid #389941 3px";
    // denne koden under tar en variabel fra css
    forYou.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
    following.style.color = "#71767b";
    let quacks = [];
    for (let i = 0; i < userData.length; i++) {
        // quacks.concat legger til innholdet i () bakerst i quacks arrayen
        // .filter funksjonen tar alle objektene som har isComment == false og tar dem i en array
        // ... foran userData[i].quacks.filter gjør at filter arrayen nå bare blir objekter uten array rundt
        // så når vi da bruker .concat vil vi legge til alle objektene og ikke en array
        quacks = quacks.concat(...userData[i].quacks.filter(q => q.isComment == false))
    }
    quacks = shuffleArray(quacks)
    for (let i = 0; i < quacks.length; i++) {
        // koden under fjerner alle tall på slutten av stringen
        // \d er hvilket som helst tall, + betyr at det skal skje en eller felere ganger
        //  og $ står for slutten og da ,"" betyr at dette skal bli byttet ut med ingenting altså fjernet
        let username = quacks[i].id.replace(/\d+$/, "");
        let user = userData.find(u => u.username == username);
        // document.createRange().createContectualFragment gjør at jeg kan appende stringen videre
        let tet = document.createRange().createContextualFragment(`<div>
            <div class="quacksContainer">
            <img src="bilder/${user.profilePicture}" alt="">
            <div class="quacksUsernameAt">
                <div class="quacksUsernameAtOnly">
                    <div class="quacksUsername">${user.displayname}</div>
                    <div class="quacksAt">@${user.username}</div>
                </div>
                <div class="quacksInside" id="${quacks[i].id}" slot="${user.username}">${quacks[i].quack}</div>
            </div>
            </div>
            <div class="quacksBottom">
                <div><img src="bilder/twitterReply.png" alt=""><div class="replies">${quacks[i].comments.length}</div></div>
            </div>
        </div>`);
        document.querySelector(".quacks").appendChild(tet);
    }
}else{
    forYou.style.color = "#71767b";
    // tar variabel fra css
    following.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
    following.style.borderBottom = "solid #389941 3px";
    // userData.find(u => u.username == localStorage.loggedIn) finner det første objektet i arrayen som har username lik localStorage.loggedIn
    let theFollowing = userData.find(u => u.username == localStorage.loggedIn).following;
    // under tar jeg alle quacksene til alle brukerne og legger dem i arrayen quacks
    let quacks = [];
    for (let i = 0; i < theFollowing.length; i++) {
        let theFollowingUser = userData.find(u => u.username == theFollowing[i])
        for (let j = 0; j < theFollowingUser.quacks.length; j++) {
            quacks.push(theFollowingUser.quacks[j]);
        }
    }
    quacks = shuffleArray(quacks)
    for (let i = 0; i < quacks.length; i++) {
        let userData = JSON.parse(localStorage.getItem("userData"));
        // koden under fjerner alle tall på slutten av stringen
        // forklaring lenger opp
        let username = quacks[i].id.replace(/\d+$/, "");
        let user = userData.find(u => u.username == username);
        // under bruker jeg en måte å skrive string på hvor man har ${}hvor man kan skrive variabler i og `` rundt for å si at det inni er string
        let tet = document.createRange().createContextualFragment(`<div>
            <div class="quacksContainer">
            <img src="bilder/${user.profilePicture}" alt="">
            <div class="quacksUsernameAt">
                <div class="quacksUsernameAtOnly">
                    <div class="quacksUsername">${user.displayname}</div>
                    <div class="quacksAt">@${user.username}</div>
                </div>
                <div class="quacksInside" id="${quacks[i].id}" slot="${user.username}">${quacks[i].quack}</div>
            </div>
            </div>
            <div class="quacksBottom">
                <div><img src="bilder/twitterLike.png" alt=""><div class="likes">${quacks[i].likes.length}</div></div>
                <div><img src="bilder/twitterReply.png" alt=""><div class="replies">${quacks[i].comments.length}</div></div>
            </div>
        </div>`);
        document.querySelector(".quacks").appendChild(tet);
    }
}

let quacksInside = document.querySelectorAll(".quacksInside");
let usernameAtOnly = document.querySelectorAll(".quacksUsernameAtOnly");
for (let i = 0; i < usernameAtOnly.length; i++) {
    usernameAtOnly[i].addEventListener("click",accessProfile)
}
for (let i = 0; i < quacksInside.length; i++) {
    quacksInside[i].addEventListener("click",accessQuack)
}
// funksjonen gjør at når man trykker på en tweet med funksjonen vil du bli sendt til
// tweet_quack.html og vi vil da vite hva som blir vist på siden med å sette informasjon til tweeten
// altså e inn i localStorage
function accessQuack(e) {
    localStorage.quack =  e.currentTarget.id;
    localStorage.quackProfile = e.currentTarget.slot;
    location.href = "tweet_quack.html"
}