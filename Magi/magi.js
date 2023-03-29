
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
document.querySelector("#rek").addEventListener("click",byttrandom)
function bytt(e) {
    if (e.target.style.backgroundColor == "green") {
        e.target.style.backgroundColor = "red"
    }else{
        e.target.style.backgroundColor = "green"
    }     
}
function byttrandom(e) {
    e.target.style.backgroundColor = generateRandomColor()
}
