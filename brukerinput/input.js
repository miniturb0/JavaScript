let knapp = document.querySelector("button")
knapp.addEventListener("click",reg)
let filmDatabase = []
function reg() {
    let info = document.querySelectorAll(".inp");
    let film = []
    for (let i = 0; i < info.length; i++) {
        film.push(info[i].value)
        
    }
    filmDatabase.push(film)
    console.log(filmDatabase)
    lagTabell()
}
function lagTabell() {
    let tabell = document.querySelector("table")
    tabell.innerHTML = "<tr><th>Filmtittel</th><th>Beskrivelse</th><th>Årstall</th><th>Aldersgrense</th></tr>";

    for (let i = 0; i < filmDatabase.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < filmDatabase.length; j++) {
           let td = document.createElement("td");
           td.innerHTML = filmDatabase[i][j]
           tr.appendChild(td)
        }
        tabell.appendchild(tr)
   }
}


