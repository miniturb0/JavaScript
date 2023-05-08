let quackT = document.querySelector("#quackT");
// når enter key blir trykket vil funksjonen createQuack() skje
quackT.addEventListener("keyup",(e) => {if(e.key ==="Enter") createQuack()})
