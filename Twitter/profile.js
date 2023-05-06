let profileName = document.querySelector("#profileName");
let quacks = document.querySelector("#topQuacks");
let userData = JSON.parse(localStorage.getItem("userData"));
let userName = document.querySelector("#username");
let userAt = document.querySelector("#atProfile");
let bio = document.querySelector("#bio");
let followersFollowing = document.querySelectorAll(".amountF");
userAt.innerHTML = `@${localStorage.profile}`;
let followButton = document.querySelector("#rightFollow");
let editProfile = document.querySelector("#editProfile")
let quackTweets = document.querySelector(".quacks");
let banner = document.querySelector("#profileBanner");
let profilePic = document.querySelector("#profilePicture");
profilePic.src = `bilder/${userData.find(u => u.username == localStorage.profile).profilePicture}`;
editProfile.addEventListener("click", () => { location.href = "settings.html" })
followButton.name = localStorage.profile;
// followButton.addEventListener("click",follow)

if (localStorage.profile == localStorage.loggedIn) {
    followButton.style.display = "none";
    editProfile.style.display = "block";
}
if (userData.find(u => u.username == localStorage.profile).followers.indexOf(localStorage.loggedIn) == -1) {
    followButton.addEventListener("click", follow)
    followButton.innerHTML = "Follow"
} else {
    followButton.addEventListener("click", unfollow)
    followButton.innerHTML = "Unfollow"
}
function follow() {
    let userData = JSON.parse(localStorage.getItem("userData"));
    let addFollowing = userData.find(u => u.username == localStorage.loggedIn).following;
    let addFollower = userData.find(u => u.username == localStorage.profile).followers;
    addFollowing.push(localStorage.profile);
    addFollower.push(localStorage.loggedIn);
    followButton.innerHTML = "Unfollow";
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.reload()
    // followButton.removeEventListener("click",follow);
    // followButton.addEventListener("click",unfollow);
}
function unfollow() {
    let userData = JSON.parse(localStorage.getItem("userData"));
    let addFollowing = userData.find(u => u.username == localStorage.loggedIn).following;
    let addFollower = userData.find(u => u.username == localStorage.profile).followers;
    addFollowing.splice(addFollowing.indexOf(localStorage.profile), 1);
    addFollower.splice(addFollower.indexOf(localStorage.loggedin), 1);
    followButton.innerHTML = "Follow";
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.reload()
    // followButton.removeEventListener("click",unfollow);
    // followButton.addEventListener("click",follow);
}

let user = userData.find(u => u.username == localStorage.profile);
quacks.innerHTML = `${user.quacks.length} quacks`;
profileName.innerHTML = localStorage.profile;
userName.innerHTML = user.displayname;
bio.innerHTML = user.bio;
banner.style.backgroundColor = user.banner;
followersFollowing[0].innerHTML = user.following.length;
followersFollowing[1].innerHTML = user.followers.length;
// koden nedenfor gjør at stringen jeg bruker kan bli appended videre
for (let j = 0; j < user.quacks.length; j++) {
    let tet = document.createRange().createContextualFragment(`<div>
            <div class="quacksContainer">
            <img src="bilder/${user.profilePicture}" alt="">
            <div class="quacksUsernameAt">
                <div class="quacksUsernameAtOnly">
                    <div class="quacksUsername">${user.displayname}</div>
                    <div class="quacksAt">@${user.username}</div>
                </div>
                <div class="quacksInside" id="${user.quacks[j].id}" slot="${user.username}">${user.quacks[j].quack}</div>
            </div>
            </div>
            <div class="quacksBottom">
                <div><img src="bilder/twitterLike.png" alt=""><div class="likes">${user.quacks[j].likes.length}</div></div>
                <div><img src="bilder/twitterReply.png" alt=""><div class="replies">${user.quacks[j].comments.length}</div></div>
            </div>
        </div>`);
    quackTweets.appendChild(tet)
}
let quacksInside = document.querySelectorAll(".quacksInside");
let usernameAtOnly = document.querySelectorAll(".quacksUsernameAtOnly");
for (let i = 0; i < usernameAtOnly.length; i++) {
    usernameAtOnly[i].addEventListener("click", accessProfile)

}
for (let i = 0; i < quacksInside.length; i++) {
    quacksInside[i].addEventListener("click", accessQuack)
}
// finner .quacksAt class og tar innerHTML med unntak av førtse symbol
// og lagrer det i localStorage for å bruke til tweet/quack siden
function accessQuack(e) {
    localStorage.quack = e.currentTarget.id;
    localStorage.quackProfile = e.currentTarget.slot
    location.href = "tweet_quack.html"
}
function accessProfile(e) {
    localStorage.profile = e.currentTarget.querySelector(".quacksAt").innerHTML.slice(1)
    location.href = "profile.html"
}
