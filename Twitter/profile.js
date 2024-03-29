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
// legger til follow knapp eller unfollow basert på om du allerede følger profilen
if (userData.find(u => u.username == localStorage.profile).followers.indexOf(localStorage.loggedIn) == -1) {
    followButton.addEventListener("click", follow)
    followButton.innerHTML = "Follow"
} else {
    followButton.addEventListener("click", unfollow)
    followButton.innerHTML = "Unfollow"
}
// funksjonen gjør at du følger noen, legger det til i localStrage
function follow() {
    let userData = JSON.parse(localStorage.getItem("userData"));
    let addFollowing = userData.find(u => u.username == localStorage.loggedIn).following;
    let addFollower = userData.find(u => u.username == localStorage.profile).followers;
    addFollowing.push(localStorage.profile);
    addFollower.push(localStorage.loggedIn);
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.reload()
}
// funksjonen gjør at du unfollower en profil, fjerner da informasjonen fra localStorage
function unfollow() {
    let userData = JSON.parse(localStorage.getItem("userData"));
    let addFollowing = userData.find(u => u.username == localStorage.loggedIn).following;
    let addFollower = userData.find(u => u.username == localStorage.profile).followers;
    addFollowing.splice(addFollowing.indexOf(localStorage.profile), 1);
    addFollower.splice(addFollower.indexOf(localStorage.loggedin), 1);
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.reload()
}
// her er kode for å legge til informasjonen localStorage.profile til siden
let user = userData.find(u => u.username == localStorage.profile);
quacks.innerHTML = `${user.quacks.length} quacks`;
profileName.innerHTML = localStorage.profile;
userName.innerHTML = user.displayname;
bio.innerHTML = user.bio;
banner.style.backgroundColor = user.banner;
followersFollowing[0].innerHTML = user.following.length;
followersFollowing[1].innerHTML = user.followers.length;
// koden nedenfor gjør at stringen jeg bruker kan bli appended videre
// her blir alle quacksene til profilen laget og appendet til siden
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
// funksjonen gjør at når man trykker på en tweet med funksjonen vil du bli sendt til
// tweet_quack.html og vi vil da vite hva som blir vist på siden med å sette informasjon til tweeten
// altså e inn i localStorage
function accessQuack(e) {
    localStorage.quack = e.currentTarget.id;
    localStorage.quackProfile = e.currentTarget.slot
    location.href = "tweet_quack.html"
}
// funksjonen blir brukt på usernames som da når trykket på vil sende deg til profile.html
// den lagrer localStorage.profile som username, men da minus første index fordi username vil ha @ først
function accessProfile(e) {
    localStorage.profile = e.currentTarget.querySelector(".quacksAt").innerHTML.slice(1)
    location.href = "profile.html"
}
