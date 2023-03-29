

function generate() {
    let inp = document.querySelectorAll("input[type=checkbox]")
    let inpc = document.querySelectorAll("input[type=text]")
    let rights = document.querySelectorAll("#right>h3")
    for (let i = 0; i < inp.length; i++) {
        if (inp[i].checked == false) {
            rights[i].style.display = "none"
        }
        if (inp[i].checked == true) {
            rights[i].style.display = "block"
            if (i==2) {
                rights[i].innerHTML= document.querySelector("select").value
            }else if (i==3) {
                rights[i].innerHTML=inpc[2].value
            }else{
                rights[i].innerHTML = inpc[i].value
            }
        }
    }
}