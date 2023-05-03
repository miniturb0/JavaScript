profile.addEventListener("click", profilePop);
let side = document.querySelector(".side");
let userData = JSON.parse(localStorage.getItem("userData"));

if (localStorage.getItem("userData") == null) {
    sessionStorage.clear()
}

let forYou = document.querySelector("#forYou");
let following = document.querySelector("#following");
forYou.addEventListener("click", forYouFollowing)
following.addEventListener("click", forYouFollowing)

function forYouFollowing(e) {
    forYou.style.borderBottom = "solid #389941 3px";
    forYou.style.color = "white";
    following.style.color = "#71767b";
    following.style.borderBottom = "none";
    sessionStorage.forYouFollowing = "forYou";
    if (e.target.id == "following") {
        following.style.borderBottom = "solid #389941 3px";
        following.style.color = "white";
        forYou.style.color = "#71767b";
        forYou.style.borderBottom = "none";
        sessionStorage.forYouFollowing = "following";
    }
}




if (sessionStorage.forYouFollowing == "forYou") {
    forYou.style.borderBottom = "solid #389941 3px";
    forYou.style.color = "white";
    following.style.color = "#71767b";
    let theFollowing = userData.find(u => u.username == localStorage.loggedIn).following;
    let quacks = [];
    for (let i = 0; i < theFollowing.length; i++) {
        // endre er sånn at HVER QUACK blir oushet in for her blir en array pushet inn istedenfor individeulle quacks.
       quacks.push(theFollowing[i].quacks);
    }
    for (let i = 0; i < quacks.length; i++) {
        let randIndex = Math.floor(Math.random()*(theFollowing.length-i));
        let username = quack[randIndex].id.slice(0,-1);
        let user = userData.find(u => u.username == username);
        let tet = document.createRange().createContextualFragment(`<div>
            <div class="quacksContainer">
            <img src="bilder/LOTR.png" alt="">
            <div class="quacksUsernameAt">
                <div class="quacksUsernameAtOnly">
                    <div class="quacksUsername">${user.displayname}</div>
                    <div class="quacksAt">@${user.username}</div>
                </div>
                <div class="quacksInside" id="${quacks[randIndex].id}" slot="${user.username}">${quacks[randIndex].quack}</div>
            </div>
            </div>
            <div class="quacksBottom">
                <div><img src="bilder/twitterLike.png" alt=""><div class="likes">${quacks[randIndex].likes.length}</div></div>
                <div><img src="bilder/twitterReply.png" alt=""><div class="replies">${quacks[randIndex].comments.length}</div></div>
            </div>
        </div>`);
        document.querySelector(".quacks").appendChild(tet);





        quacks.slice(randIndex,1);
    }




} else {
    forYou.style.color = "#71767b";
    following.style.color = "white";
    following.style.borderBottom = "solid #389941 3px";
}

