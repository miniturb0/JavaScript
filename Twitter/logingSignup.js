let inp = document.querySelectorAll(".inp");
let feilm = document.querySelector("#feilmelding");
let profile = document.querySelector("#profile");
// funksjon som skal lage et objekt
function obj(un,pw) {
    this.username = un;
    this.displayname = un;
    this.password = pw;
    this.followers = [];
    this.following = [];
    this.bio = "alive";
    this.quacks = [];
    this.like = [];
    this.banner = "#389941";
    this.profilePicture = "LinusTech.png"
}
// koden gjør at det ikke kan bli skrevet inn mellomrom i input feltet
inp[0].addEventListener('keydown', (e) => {
    if (e.keyCode == 32) {
      e.preventDefault();
    }
});
//
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
    
    let newUser = new obj(un, pw);
// får error hvis den parser null som man får i tilfelle hvor localStorage.userData er null eller undefined så || gjør at hvis den er false så gjør den neste
    let existingData = JSON.parse(localStorage.getItem("userData")) || [];
    existingData.push(newUser);
    localStorage.setItem("userData", JSON.stringify(existingData));
    feilm.innerHTML = `You have created an account ${inp[0].value}`;
    inp[0].value = "";
    inp[1].value = "";
}
if (localStorage.theme == "light") {
    document.documentElement.style.setProperty("--background-color", "white");
    document.documentElement.style.setProperty("--background-colorOp", "black")
    document.documentElement.style.setProperty("--backgroundSee-color", "rgba(255,255, 255, 255.90)");
    document.documentElement.style.setProperty("--color", "black");
    document.documentElement.style.setProperty("--colorOp", "white");
} else {
    document.documentElement.style.setProperty("--background-color", "black");
    document.documentElement.style.setProperty("--background-colorOp", "white")
    document.documentElement.style.setProperty("--backgroundSee-color", "rgba(0, 0, 0, 0.90)");
    document.documentElement.style.setProperty("--color", "white");
    document.documentElement.style.setProperty("--colorOp", "black");
}