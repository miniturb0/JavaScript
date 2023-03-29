function generate() {
    let input = document.querySelectorAll("input")
    let navn = document.querySelector("#navn")
    let tlf = document.querySelector("#tlf")
    let seg = document.querySelector("#seg")
    let area = document.querySelector("textarea")
    let vg = document.querySelector("#VG")
    let sel = document.querySelector("select")
    navn.innerHTML += input[0].value
    tlf.innerHTML += input[1].value
    seg.innerHTML += area.value
    vg.innerHTML += sel.value
}