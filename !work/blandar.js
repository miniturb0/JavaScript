// let bodyE1 = document.querySelector("body")
// let farger = ["#F69C7C", "#FED777", "#EFEE8C", "#C3DE97", "#8ED2CD", "#98AAD7"]




let body = document.querySelector("body")

let maaner = [["Ekspedisjon", "Dato", "Deltagere som gikk på månen"], ["Apollo 11", "20. juli 2969", "Neil Armstrong","Buzz Aldrin"], ["Apollo 12", "19. november 1969","Pete Conra","Alan Bean"], ["Apollo 14", "5. februar 1971", "Alan Shepard","Edgard Mitchell"], ["Apollo 15", "31. juli 1971", "David R. Scott","James Irwin"], ["Apollo 16", "21. april 1972", "John Young","Charles Duke"], ["Apollo 17", "11. desember 1972", "Eugene Cernan","Harrison Schmitt"]]

for (let i = 1; i < maaner.length; i++) {
    let di = body.appendChild(document.createElement("div"))
    let a = di.appendChild(document.createElement("h1"))
    a.innerHTML = maaner[i][2];
    let b = di.appendChild(document.createElement("h1"))
    b.innerHTML = maaner[i][3]
    di.style.display = "flex";
    di.style.backgroundColor = "gray";
}

