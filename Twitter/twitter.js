let inp = document.querySelectorAll(".inp");
let feilm = document.querySelector("#feilmelding");
let gend = document.querySelectorAll("label");
let profile = document.querySelector("#profile");
let userData = []
// funksjon som skal lage et objekt
function obj(un,pw,g) {
    this.username = un;
    this.password = pw;
    this.gender = g;
}
function signup() {
    let data = JSON.parse(localStorage.getItem("userData")) || []
    if (inp[0].value=="" || inp[1].value=="") {
        feilm.innerHTML = "Choose both username and password"
        return
    }for (let i = 0; i < data.length; i++) {
        if (data[i].username == inp[0].value) {
            feilm.innerHTML = "Username "+inp[0].value +" is already taken, choose another one"
            return
        }
    }
    let un = inp[0].value;
    let pw = inp[1].value;
    let g ="";
    if (inp[2].checked) {
        g = "man"
    }else if (inp[3].checked) {
        g = "woman"
    }else{
        feilm.innerHTML = "choose gender"
        return
    }
    let newUser = new obj(un, pw, g);
// får error hvis den parser null som man får i tilfelle hvor localStorage.userData er null eller undefined så || gjør at hvis den er false så gjør den neste
    let existingData = JSON.parse(localStorage.getItem("userData")) || [];
    existingData.push(newUser);
    localStorage.setItem("userData", JSON.stringify(existingData));
    feilm.innerHTML = "You have created an account "+inp[0].value
    inp[0].value = "";
    inp[1].value = "";
    inp[2].style.display = "none";
    inp[3].style.display = "none";
    gend[0].style.display= "none";
    gend[1].style.display= "none";
}
function login() {
    let data = JSON.parse(localStorage.getItem("userData")) || [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].username == inp[0].value && data[i].password == inp[1].value) {
            sessionStorage.loggedIn = inp[0].value
            location.href = "index.html";
            return
        }
    }
}
// utfører funksjonen nedenfor når siden har blitt lastet inn
window.onload = function () {
    if (sessionStorage.loggedIn == undefined && window.location.href.indexOf("index.html") != -1) {
        location.href = "login.html"
        return
    }else if (profile) {
        profile.innerHTML = sessionStorage.loggedIn
    }
}