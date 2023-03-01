let body = document.querySelector("body")
body.style.overflow = "hidden";

for (let i = 0; i < 100; i++) {
    let rand = Math.floor(Math.random()*30+50)
    let randpos = Math.floor(Math.random()*101)
    let a = body.appendChild(document.createElement("div"))
    a.style.borderRadius = ("50%");
    a.style.height = (String(rand)+"px")
    a.style.width = (String(rand)+"px")
    a.style.backgroundColor = "red";
    a.style.position = "absolute"
    a.style.left = String(randpos)+"%"
    a.style.top = String(Math.floor(Math.random()*101))+"%"
}