let inp = document.querySelectorAll("input[type=number]")
let liste = document.querySelector("#liste")
let radios = document.querySelectorAll("input[type=radio]")

for (let i = 0; i < inp.length; i++) {
    inp[i].addEventListener("input",bestill)
    inp[i].value = 0;
}
radios[0].addEventListener("input",bestill)
radios[1].addEventListener("input",bestill)

function bestill() {
    let sum = 0;
    for (let i = 0; i < inp.length; i++) {
        sum += Number(inp[i].value)*Number(inp[i].id)
    }
    document.querySelector("h3").innerHTML = "Total pris: "+String(sum)+"kr"
    inp[3].max = Number(inp[0].value) + Number(inp[1].value) + Number(inp[2].value)
    inp[4].max = inp[3].max
    let iks = "";
    for (let i = 0; i < inp.length-1; i++) {
        if (inp[i].value >0) {
            iks += inp[i].value+" * "+inp[i].placeholder+", " 
        }
    }if (inp[inp.length-1].value >0) {
        iks += inp[inp.length-1].value+" * "+inp[inp.length-1].placeholder
    }if (radios[0].checked) {
        iks+= ", "+radios[0].placeholder+": Ja"
    }
    liste.innerHTML = iks
}