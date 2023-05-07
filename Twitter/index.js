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
        quacks = quacks.concat(...userData[i].quacks.filter(q => q.isComment == false))
    }
    quacks = shuffleArray(quacks)
    for (let i = 0; i < quacks.length; i++) {
        // koden under fjerner alle tall på slutten av stringen
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
    // tar variabel fra css igjen
    following.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
    following.style.borderBottom = "solid #389941 3px";
    // userData.find(u => u.username == localStorage.loggedIn) finner det første objektet i arrayen som har username lik localStorage.loggedIn
    let theFollowing = userData.find(u => u.username == localStorage.loggedIn).following;
    let quacks = [];
    for (let i = 0; i < theFollowing.length; i++) {
        // endre er sånn at HVER QUACK blir pushet in for her blir en array pushet inn istedenfor individeulle quacks.
        let theFollowingUser = userData.find(u => u.username == theFollowing[i])
        for (let j = 0; j < theFollowingUser.quacks.length; j++) {
            quacks.push(theFollowingUser.quacks[j]);
        }
    }
    quacks = shuffleArray(quacks)
    for (let i = 0; i < quacks.length; i++) {
        let userData = JSON.parse(localStorage.getItem("userData"));
        // koden under fjerner alle tall på slutten av stringen
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
function accessQuack(e) {
    localStorage.quack =  e.currentTarget.id;
    localStorage.quackProfile = e.currentTarget.slot;
    location.href = "tweet_quack.html"
}