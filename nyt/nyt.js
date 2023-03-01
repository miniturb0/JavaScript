let bodyy = document.querySelector("body")
let ar = document.querySelectorAll("div")
function ru(e){
    bodyy.style.backgroundColor = e.target.attributes["name"].value
    console.log("hello",e)
}
   
for (let i = 0; i < 3; i++) {
        ar[i].addEventListener("click",ru)
}
let divy = document.querySelectorAll("#main>div")


for (let i = 1; i < divy.length+1; i++) {
    
}

console.log(divy)
function asd(e) {
    for (let i = 1; i < divy.length+1; i++) {
        if (i%3==0) {
            e.target.attributes["name"].value = "3,"+i/3
            console.log(i)
        }else if (i%2 == 0) {
            e.target.attributes["name"].value = "2,"+i/2
        }else{
            e.target.attributes["name"].value = "1,"+i
        }
    }
}


for (let i = 0; i < divy.length; i++) {
    divy[i].addEventListener("click",asd)
    
}