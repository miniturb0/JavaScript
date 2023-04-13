let inp = document.querySelectorAll("input");
let feilm = document.querySelector("#feilmelding");
let brukernavn = "";
let passord = "";



function logIn() {
    if (inp[0].value!="" && inp[1].value!="") {
        if (localStorage.brukernavn!=undefined && localStorage.passord!=undefined) {
            let sjekk1 = localStorage.brukernavn;
            sjekk1 = sjekk1.split(":");
            let sjekk2 = localStorage.passord;
            sjekk2 = sjekk2.split(":")
            if (sjekk1.indexOf(inp[0].value)!=-1 && sjekk2.indexOf(inp[1].value)!=-1) {
                feilm.innerHTML = "logget inn"
                location.href = "index.html"
            }else{
                feilm.innerHTML = "Wrong username or password"
            }
        }
        
    }
    

}

function signUp() {
    localStorage.brukernavn += ":"+inp[0].value
    localStorage.passord += ":"+inp[1].value
}
// localStorage.removeItem("brukernavn");