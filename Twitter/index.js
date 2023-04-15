
    let side = document.querySelector(".side");
    let userData = JSON.parse(localStorage.getItem("userData"))

    for (let i = 0; i < userData.length; i++) {
        if (userData[i].username != sessionStorage.loggedIn) {
            let a = document.createElement("a");
            a.href = "";
            let div = document.createElement("div");
            div.innerHTML = userData[i].username;
            let img = document.createElement("img");
            let button = document.createElement("button");
            if (userData[i].followers.indexOf(sessionStorage.loggedIn)==-1) {
                button.addEventListener("click",follow);
                button.innerHTML = "follow";
            }else{
                button.addEventListener("click",unfollow);
                button.innerHTML = "unfollow";
            }
            button.name = userData[i].username;
            if (userData[i].gender == "male") {
            img.src = "bilder/icon.png";
            }else{
            img.src = "bilder/iconFF.png";
            }
            a.appendChild(img);
            a.appendChild(div);
            a.appendChild(button);
            side.appendChild(a);
        }
        
    }

