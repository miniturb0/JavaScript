let usernameAt = document.querySelector(".quacksUsernameAtReply");
let quacksUsername = document.querySelector(".quacksUsernameReply");
let quacksAt = document.querySelector(".quacksAtReply");
let quacksInside = document.querySelector(".quacksInsideReply");
let replies = document.querySelector(".replies");
let quackTweets = document.querySelectorAll(".quacks");
let userData = JSON.parse(localStorage.getItem("userData"));
let quackT = document.querySelector("#quackTR");
let userQuacks = userData.find(q => q.username == localStorage.quackProfile).quacks;
let quack = userQuacks.find(q => q.id == localStorage.quack);
let profilePic = document.querySelector("#profilePicture");
profilePic.src = `bilder/${userData.find(u => u.username == localStorage.quackProfile).profilePicture}`;
quacksUsername.innerHTML = userData.find(u=>u.username==localStorage.quackProfile).displayname;
usernameAt.addEventListener("click", accessProfileQuack);
quacksAt.innerHTML = `@${localStorage.quackProfile}`;
// legger til enda en eventlistener for hvis man trykker enter, vil da starte createReply
quackT.addEventListener("keyup",(e) => {if(e.key ==="Enter") createReply()})
quacksInside.innerHTML = quack.quack;
replies.innerHTML = quack.comments.length;

// koden under appender kommentarene til en quack til siden
for (let i = 0; i < quack.comments.length; i++) {
    // koden under fjerner alle tall på slutten av stringen
        // \d er hvilket som helst tall, + betyr at det skal skje en eller felere ganger
        //  og $ står for slutten og da ,"" betyr at dette skal bli byttet ut med ingenting altså fjernet
    let username = quack.comments[i].replace(/\d+$/, "");
    let user = userData.find(u => u.username == username);
    let quackFromId = user.quacks.find(t => t.id == quack.comments[i])
    // koden under gjør at jeg kan appende stringen
    let tet = document.createRange().createContextualFragment(`<div>
            <div class="quacksContainer">
            <img src="bilder/${user.profilePicture}" alt="">
            <div class="quacksUsernameAt">
                <div class="quacksUsernameAtOnly">
                    <div class="quacksUsername">${user.displayname}</div>
                    <div class="quacksAt">@${user.username}</div>
                </div>
                <div class="quacksInside" id="${quackFromId.id}" slot="${user.username}">${quackFromId.quack}</div>
            </div>
            </div>
            <div class="quacksBottom">
                <div><img src="bilder/twitterReply.png" alt=""><div class="replies">${quackFromId.comments.length}</div></div>
            </div>
        </div>`);
    quackTweets[1].appendChild(tet);
}
quacksInside = document.querySelectorAll(".quacksInside");
let usernameAtOnly = document.querySelectorAll(".quacksUsernameAtOnly");
for (let i = 0; i < usernameAtOnly.length; i++) {
    usernameAtOnly[i].addEventListener("click",accessProfile);
}
for (let i = 0; i < quacksInside.length; i++) {
    quacksInside[i].addEventListener("click",accessQuack);
}
// funksjonen gjør at når man trykker på en tweet med funksjonen vil du bli sendt til
// tweet_quack.html og vi vil da vite hva som blir vist på siden med å sette informasjon til tweeten
// altså e inn i localStorage
function accessQuack(e) {
    localStorage.quack =  e.currentTarget.id;
    localStorage.quackProfile = e.currentTarget.slot;
    location.href = "tweet_quack.html";
}