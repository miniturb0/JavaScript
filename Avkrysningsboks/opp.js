document.querySelector("button").addEventListener("click",GO)
let divy = document.querySelector("div")
let ins = document.querySelectorAll("input")
function GO() {
    for (let i = 0; i < ins.length; i++) {
        if (ins[0].checked) {
            divy.style.borderRadius = "25px"
        }
    }
    
}