let usernameAt = document.querySelector(".quacksUsernameAtReply");
let quacksUsername = document.querySelector(".quacksUsernameReply");
let quacksAt = document.querySelector(".quacksAtReply");
let quacksInside = document.querySelector(".quacksInsideReply");
let likes = document.querySelector(".likes");
let replies = document.querySelector(".replies");
let userData = JSON.parse(localStorage.getItem("userData"));
let quackTweets = document.querySelectorAll(".quacks");

let userQuacks = userData.find(q => q.username == localStorage.quackProfile).quacks;
let quack = userQuacks.find(q => q.id == localStorage.quack);

quacksUsername.innerHTML = localStorage.quackProfile;
usernameAt.addEventListener("click", accessProfileQuack);
quacksAt.innerHTML = `@${localStorage.quackProfile}`;
quacksInside.innerHTML = quack.quack;
likes.innerHTML = quack.likes.length;
replies.innerHTML = quack.comments.length;




for (let i = 0; i < quack.comments.length; i++) {
    let username = quack.comments[i].slice(0,-1);

    let user = userData.find(u => u.username == username);
    let quackFromId = user.quacks.find(t => t.id == quack.comments[i])


    let tet = document.createRange().createContextualFragment(`<div>
            <div class="quacksContainer">
            <img src="bilder/LOTR.png" alt="">
            <div class="quacksUsernameAt">
                <div class="quacksUsernameAtOnly">
                    <div class="quacksUsername">${user.displayname}</div>
                    <div class="quacksAt">@${user.username}</div>
                </div>
                <div class="quacksInside" id="${quackFromId.id}" slot="${user.username}">${quackFromId.quack}</div>
            </div>
            </div>
            <div class="quacksBottom">
                <div><img src="bilder/twitterLike.png" alt=""><div class="likes">${quackFromId.likes.length}</div></div>
                <div><img src="bilder/twitterReply.png" alt=""><div class="replies">${quackFromId.comments.length}</div></div>
            </div>
        </div>`);

    quackTweets[1].appendChild(tet)


}

quacksInside = document.querySelectorAll(".quacksInside");
let usernameAtOnly = document.querySelectorAll(".quacksUsernameAtOnly");
for (let i = 0; i < usernameAtOnly.length; i++) {
    usernameAtOnly[i].addEventListener("click",accessProfile)
    
}
for (let i = 1; i < quacksInside.length; i++) {
    quacksInside[i].addEventListener("click",accessQuack)
}
