let bannerColor = document.querySelector("#bannerColor");
let userData = JSON.parse(localStorage.getItem("userData"));
let name = document.querySelector("#newDisplayName");
let bio = document.querySelector("#newBio");
let profileDisplay = document.querySelector("#profile");
let generalDisplay = document.querySelector("#general")
let inputs = document.querySelectorAll("input[type='radio']")
bannerColor.value = userData.find(u => u.username==localStorage.loggedIn).banner;
name.value = userData.find(u => u.username==localStorage.loggedIn).displayname;
bio.value = userData.find(u => u.username==localStorage.loggedIn).bio;
// funksjonen lagrer informajsonen på profil siden inn på localStorage
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
// funksjonen lagrer dark eller light mode i localStorage
function saveTheme() {
    if (inputs[0].checked) {
        localStorage.theme = "dark";
        window.location.reload();
    }else{
        localStorage.theme ="light";
        window.location.reload();
    }
}
// funksjonen gjør at personen logger ut
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.reload();
}
// koden under viser enten profile settings eller general ut i fra
// om det er forYou som ligger i sessionStorage
if (sessionStorage.forYouFollowing == "forYou") {
    forYou.style.borderBottom = "solid #389941 3px";
    forYou.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
    following.style.color = "#71767b";
    profileDisplay.style.display = "none";
    generalDisplay.style.display = "block";
}else{
    profileDisplay.style.display = "flex";
    forYou.style.color = "#71767b";
    following.style.color = getComputedStyle(document.documentElement).getPropertyValue('--color');
    following.style.borderBottom = "solid #389941 3px";
    generalDisplay.style.display = "none";
}


