let spors = [""]
let ins = document.querySelectorAll("select")
let svar = ["Paris","Oslo","Bern","Brussel","Abuja","Astana","Moskva","Beirut"]
let par = document.querySelector("p")

function sjekk() {
    let poeng = 0;
    for (let i = 0; i < ins.length; i++) {
        if (ins[i].value==svar[i]) {
            poeng++
        }
    }
    par.innerHTML=poeng
}   
var seconds = 0;
let timer = document.querySelector("#timer")

function incrementSeconds() {
    seconds += 1;
    timer.innerHTML = "You have been here for " + seconds + " seconds.";
}

// var cancel = setInterval(incrementSeconds, 1000);
function stop() {
    incrementSeconds.clearInterval()
}
