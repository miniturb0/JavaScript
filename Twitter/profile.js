// gi sessionStorage.profil
// sessionStorage.profil skal bestemme profil.html sitt innhold
let profileName = document.querySelector("#profileName");
let quacks = document.querySelector("#topQuacks");
let userData = JSON.parse(localStorage.getItem("userData"));
let userName = document.querySelector("#username");
let userAt = document.querySelector("#atProfile");
let bio = document.querySelector("#bio");
let followersFollowing = document.querySelectorAll(".amountF");
userAt.innerHTML = `@${localStorage.profile}`;
let followButton = document.querySelector("#rightFollow");
let quackTweets = document.querySelector("#quacks");
followButton.name = localStorage.profile;
followButton.addEventListener("click",follow)


    

for (let i = 0; i < userData.length; i++) {
    if (localStorage.profile == userData[i].username){
        quacks.innerHTML = `${userData[i].quacks.length} quacks`;
        profileName.innerHTML = localStorage.profile;
        userName.innerHTML = userData[i].displayname;
        bio.innerHTML = userData[i].bio;
        followersFollowing[0].innerHTML = userData[i].following.length;
        followersFollowing[1].innerHTML = userData[i].followers.length;
        for (let j = 0; j < userData[i].quacks.length; j++) {
            let tet = document.createRange().createContextualFragment(`<div>
            <div class="quacksContainer">
            <img src="bilder/LOTR.png" alt="">
            <div class="quacksUsernameAt">
                <div>
                    <div class="quacksUsername">${userData[i].displayname}</div>
                    <div class="quacksAt">@${userData[i].username}</div>
                </div>
                <div class="quacksInside">${userData[i].quacks[j].quack}</div>
            </div>
            </div>
            <div class="quacksBottom">
                <div><img src="bilder/likeIcon.png" alt=""><div class="likes">${userData[i].quacks[j].likes.length}</div></div>
                <div><img src="bilder/replyIcon.png" alt=""><div class="replies">${userData[i].quacks[j].comments.length}</div></div>
            </div>
        </div>`);

            quackTweets.appendChild(tet)
        }
    }
}
