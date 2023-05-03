let inp = document.querySelectorAll(".inp");
let feilm = document.querySelector("#feilmelding");
let profile = document.querySelector("#profile");
// funksjon som skal lage et objekt
function obj(un,pw,g) {
    this.username = un;
    this.displayname = un;
    this.password = pw;
    this.gender = g;
    this.followers = [];
    this.following = [];
    this.bio = "alive";
    this.quacks = [];
    this.like = [];
    this.banner = "#389941";
}
function login() {
    let data = JSON.parse(localStorage.getItem("userData")) || [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].username == inp[0].value && data[i].password == inp[1].value) {
            localStorage.loggedIn = inp[0].value;
            localStorage.profile = data[i].username
            location.href = "profile.html";
            return
        }
    }
    feilm.innerHTML = "Feil brukernavn eller passord";
}
function signup() {
    let data = JSON.parse(localStorage.getItem("userData")) || []
    if (inp[0].value=="" || inp[1].value=="") {
        feilm.innerHTML = "Choose both username and password";
        return
    }for (let i = 0; i < data.length; i++) {
        if (data[i].username != inp[0].value) {
            continue;
        }
        feilm.innerHTML = `Username ${inp[0].value} is already taken, choose another one`;
        return
    }
    let un = inp[0].value;
    let pw = inp[1].value;
    let g ="male";
    if (inp[3].checked == false && inp[2].checked == false) {
        feilm.innerHTML = "choose gender";
        return
    }
    if (inp[3].checked) {
        g = "female";
    }
    let newUser = new obj(un, pw, g);
// får error hvis den parser null som man får i tilfelle hvor localStorage.userData er null eller undefined så || gjør at hvis den er false så gjør den neste
    let existingData = JSON.parse(localStorage.getItem("userData")) || [];
    existingData.push(newUser);
    localStorage.setItem("userData", JSON.stringify(existingData));
    feilm.innerHTML = `You have created an account ${inp[0].value}`;
    inp[0].value = "";
    inp[1].value = "";
    inp[2].checked = false;
    inp[3].checked = false;
}