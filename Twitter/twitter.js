let inp = document.querySelectorAll(".inp");
let feilm = document.querySelector("#feilmelding");
let profile = document.querySelector("#profile");
// funksjon som skal lage et objekt
function obj(un,pw,g) {
    this.username = un;
    this.password = pw;
    this.gender = g;
    this.followers = [];
    this.following = [];
    this.status = "alive";
    this.quacks = 0;
}
function signup() {
    let data = JSON.parse(localStorage.getItem("userData")) || []
    if (inp[0].value=="" || inp[1].value=="") {
        feilm.innerHTML = "Choose both username and password";
        return
    }for (let i = 0; i < data.length; i++) {
        if (data[i].username == inp[0].value) {
            feilm.innerHTML = "Username "+inp[0].value +" is already taken, choose another one";
            return
        }
    }
    let un = inp[0].value;
    let pw = inp[1].value;
    let g ="";
    if (inp[2].checked) {
        g = "male";
    }else if (inp[3].checked) {
        g = "female";
    }else{
        feilm.innerHTML = "choose gender";
        return
    }
    let newUser = new obj(un, pw, g);
// får error hvis den parser null som man får i tilfelle hvor localStorage.userData er null eller undefined så || gjør at hvis den er false så gjør den neste
    let existingData = JSON.parse(localStorage.getItem("userData")) || [];
    existingData.push(newUser);
    localStorage.setItem("userData", JSON.stringify(existingData));
    feilm.innerHTML = "You have created an account "+inp[0].value;
    inp[0].value = "";
    inp[1].value = "";
    inp[2].checked = false;
    inp[3].checked = false;
}
function login() {
    let data = JSON.parse(localStorage.getItem("userData")) || [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].username == inp[0].value && data[i].password == inp[1].value) {
            sessionStorage.loggedIn = inp[0].value;
            location.href = "index.html";
            return
        }
    }
}
// utfører funksjonen nedenfor når siden har blitt lastet inn
window.onload = function () {
    if (sessionStorage.loggedIn == undefined && window.location.href.indexOf("index.html") != -1) {
        location.href = "login.html";
        return
    }else if (profile) {
        profile.innerHTML = sessionStorage.loggedIn;
    }
}


function follow(e) {
    let username = e.target.name;
    if (username == sessionStorage.loggedIn) {
        return
    }
    let existingData = JSON.parse(localStorage.getItem("userData"));
    for (let i = 0; i < existingData.length; i++) {
        if (existingData[i].username == username) {
            let existingFollowers = existingData[i].followers;
            let newFollower = sessionStorage.loggedIn;
            existingFollowers.push(newFollower);
            existingData[i].followers = existingFollowers;
            localStorage.setItem("userData",JSON.stringify(existingData));
        }
        if (existingData[i].username == sessionStorage.loggedIn) {
            let existingFollowing = existingData[i].following;
            existingFollowing.push(username);
            existingData[i].following = existingFollowing;
            localStorage.setItem("userData",JSON.stringify(existingData));
        }
    }
    e.target.removeEventListener("click",follow);
    e.target.addEventListener("click",unfollow);
    e.target.innerHTML = "unfollow";
}
function unfollow(e) {
    let username = e.target.name;;
    if (username == sessionStorage.loggedIn) {
        return
    }
    let existingData = JSON.parse(localStorage.getItem("userData"));
    for (let i = 0; i < existingData.length; i++) {
        if (existingData[i].username == username) {
            let existingFollowers = existingData[i].followers;
            let newFollower = sessionStorage.loggedIn;
            let index = existingFollowers.indexOf(newFollower);
            existingData[i].followers.splice(index,1);
            localStorage.setItem("userData",JSON.stringify(existingData));
        }
        if (existingData[i].username == sessionStorage.loggedIn) {
            let existingFollowing = existingData[i].following;
            let index = existingFollowing.indexOf(username);
            existingData[i].following.splice(index, 1);
            localStorage.setItem("userData",JSON.stringify(existingData));
        }
}e.target.removeEventListener("click",unfollow);
e.target.addEventListener("click",follow);
e.target.innerHTML = "follow";
}


// bruke e.target.getElementsByTagName("div") for å muligens gjøre click area
// større, da må også endre index.js kode for å lage en div rundt både img og username
function profilePop(e) {
    if (e.target.innerHTML == sessionStorage.loggedIn) {
        document.querySelector("#personalProfile").style.display = "block";
    }else{
        document.querySelector("#personalProfile").style.display = "none";
    }
    let userData = JSON.parse(localStorage.getItem("userData"));
    let main = document.querySelector("#profilePop");
    let head = document.querySelector("#user");
    let followers = document.querySelector("#followers");
    let following = document.querySelector("#following");
    let quacks = document.querySelector("#quacks");
    let status = document.querySelector("#status");
    let followy = document.querySelector("#follow");
    followy.name = e.target.innerHTML
    for (let i = 0; i < userData.length; i++) {
        if (sessionStorage.loggedIn == userData[i].username && userData[i].following.indexOf(followy.name)==-1) {
            followy.addEventListener("click",follow)
        }else if (sessionStorage.loggedIn == userData[i].username && userData[i].following.indexOf(followy.name)!=-1) {
            followy.addEventListener("click",unfollow)
        }
    }
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].username == e.target.innerHTML) {
            followers.innerHTML = userData[i].followers.length;
            status.innerHTML = userData[i].status;
            following.innerHTML = userData[i].following.length;
            quacks.innerHTML = userData[i].quacks;
        }
    }
    head.innerHTML = e.target.innerHTML;
    main.style.display = "block";
}
function setStatus() {
    let statusInp = document.querySelector("#statusInp");
    let status = document.querySelector("#status");
    let newStatus = statusInp.value;
    let head = document.querySelector("#user");
    status.innerHTML = newStatus;
    let userData = JSON.parse(localStorage.getItem("userData"));
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].username == head.innerHTML) {
            userData[i].status = newStatus;
        }
    }
    statusInp.value = "";
    localStorage.setItem("userData",JSON.stringify(userData))
}

// endrer fra antall followers og following til navnene istedet og bytter om annen hvergang
// ved hjelp av nN
let nN = 0;
function names() {
    let userData = JSON.parse(localStorage.getItem("userData"));
    let followers = document.querySelector("#followers");
    let following = document.querySelector("#following");
    let head = document.querySelector("#user");
    if (nN == 0) {
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].username == head.innerHTML) {
                let string1 = userData[i].followers.toString();
                followers.innerHTML = string1;
                let string2 = userData[i].following.toString();
                following.innerHTML = string2;
            }
        }
        nN=1
    }else{
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].username == head.innerHTML) {
                let string1 = userData[i].followers.length;
                followers.innerHTML = string1;
                let string2 = userData[i].following.length;
                following.innerHTML = string2;
            }
        }
        nN=0
    }
    
}