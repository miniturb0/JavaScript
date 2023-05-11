let input1 = document.querySelector("#rektangel1Input");
let input2 = document.querySelector("#rektangel2Input");
let rektangel1 = document.querySelector("#rektangelen1");
let rektangel2 = document.querySelector("#rektangelen2");
let arealet = document.querySelector("#arealet");

function lageFirkant(input) {
    if (input1.value > 9 || input1.value < 1 || input2.value < 1 || input2.value > 9) return;
    if (input == 1) {
        let bredde = Number(input1.value);
        let hoyde = 10-bredde;
        rektangel1.style.height = `${hoyde*50}px`;
        rektangel1.style.width = `${bredde*50}px`;
        rektangel1.style.border = "blue solid 3px";
        rektangel1.addEventListener("click",areal);
    }else{
        let bredde = Number(input2.value);
        let hoyde = 10-bredde;
        rektangel2.style.height = `${hoyde*50}px`;
        rektangel2.style.width = `${bredde*50}px`;
        rektangel2.style.border = "blue solid 3px";
        rektangel2.addEventListener("click",areal);
    }
}
function areal(e) {
    let width = e.target.style.width;
    width = width.substring(0,width.length-1);
    width = Number(width.substring(0,width.length-1));
    let height = e.target.style.height;
    height = height.substring(0,height.length-1);
    height = Number(height.substring(0,height.length-1));
    let areal = width*height;
    arealet.innerHTML = `${areal}`;
}