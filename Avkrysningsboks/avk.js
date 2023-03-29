
function test() {
    let a = document.querySelectorAll('input[type=checkbox]')
    let b = document.querySelectorAll('input[type=radio]')
    let ut = document.querySelector("p")
    let trykkedeKryss = []
    let x = "";
    let oscar = ""
    for (let i = 0; i < a.length; i++) {
        if (a[i].checked) {
            trykkedeKryss.push(a[i])

        }
    }
    for (let i = 0; i < trykkedeKryss.length; i++) {
        if (i==0) {
            x += trykkedeKryss[i].value
        }else{
            if (i == trykkedeKryss.length -1) {
                x +=" og "+trykkedeKryss[i].value
            }else{
                x += trykkedeKryss[i].value+", "
            }
        }
        
    }
    for (let i = 0; i < b.length; i++) {
        if (b[i].checked) {
            oscar = b[i].value
        }
    }
    ut.innerHTML = "Filmen finnes på "+x+"filmen fikk"+oscar
}