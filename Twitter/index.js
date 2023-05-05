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
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



if (sessionStorage.forYouFollowing == "forYou") {
    forYou.style.borderBottom = "solid #389941 3px";
    forYou.style.color = "white";
    following.style.color = "#71767b";
    let theFollowing = userData.find(u => u.username == localStorage.loggedIn).following;
    let quacks = [];
    for (let i = 0; i < theFollowing.length; i++) {
        // endre er sånn at HVER QUACK blir pushet in for her blir en array pushet inn istedenfor individeulle quacks.
        let theFollowingUser = userData.find(u => u.username == theFollowing[i])
        for (let j = 0; j < theFollowingUser.quacks.length; j++) {
            quacks.push(theFollowingUser.quacks[j]);
        }
    }
    console.log(quacks)
    console.log(shuffleArray(quacks))
    quacks = shuffleArray(quacks);
    for (let i = 0; i < quacks.length; i++) {
        let userData = JSON.parse(localStorage.getItem("userData"));
        let username = quacks[i].id.slice(0,-1);
        let user = userData.find(u => u.username == username);
        let tet = document.createRange().createContextualFragment(`<div>
            <div class="quacksContainer">
            <img src="bilder/LOTR.png" alt="">
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
} else {
    forYou.style.color = "#71767b";
    following.style.color = "white";
    following.style.borderBottom = "solid #389941 3px";
}

