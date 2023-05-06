let bannerColor = document.querySelector("#bannerColor");
let userData = JSON.parse(localStorage.getItem("userData"));
let name = document.querySelector("#newDisplayName");
let bio = document.querySelector("#newBio");
bannerColor.value = userData.find(u => u.username==localStorage.loggedIn).banner;
name.value = userData.find(u => u.username==localStorage.loggedIn).displayname;
bio.value = userData.find(u => u.username==localStorage.loggedIn).bio;
function save() {
    let check = name.value.trim();
    if (check == "") return;
    let user = userData.find(u => u.username == localStorage.loggedIn);
    user.banner = bannerColor.value;
    user.displayname = name.value;
    user.bio = bio.value;
    localStorage.setItem("userData",JSON.stringify(userData));
    location.href = "profile.html"
}