function sum() {
    let input = document.querySelectorAll("input")
    let sele = document.querySelector("select")
    let button = document.querySelector("button")
    let sum = 0;
    if (sele.value == 1) {
        for (let i = 0; i < input.length; i++) {
            sum += Number(input[i].value)
        }
        button.innerHTML = sum
    }else{
        for (let i = 0; i < input.length; i++) {
            sum +=Number(input[i].value)
        }
        sum=sum/input.length
        button.innerHTML = sum
    }

}