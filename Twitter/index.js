profile.addEventListener("click",profilePop);
let side = document.querySelector(".side");
let userData = JSON.parse(localStorage.getItem("userData"));
if (localStorage.getItem("userData")) {
    
}
// kode som legger til alle brukere under registrerte utenom den som er logget inn
    for (let i = 0; i < userData.length; i++) {
        if (userData[i].username != sessionStorage.loggedIn) {
            let mainDiv = document.createElement("div");
            mainDiv.href = "";
            let div = document.createElement("div");
            div.innerHTML = userData[i].username;
            div.style.cursor = "pointer";
            div.addEventListener("click",profilePop)
            let img = document.createElement("img");
            // let button = document.createElement("button");
            // if (userData[i].followers.indexOf(sessionStorage.loggedIn)==-1) {
            //     button.addEventListener("click",follow);
            //     button.innerHTML = "follow";
            // }else{
            //     button.addEventListener("click",unfollow);
            //     button.innerHTML = "unfollow";
            // }
            // button.name = userData[i].username;
            if (userData[i].gender == "male") {
            img.src = "bilder/icon.png";
            }else{
            img.src = "bilder/iconFF.png";
            }
            mainDiv.appendChild(img);
            mainDiv.appendChild(div);
            // mainDiv.appendChild(button);
            side.appendChild(mainDiv);
        } 
    }


