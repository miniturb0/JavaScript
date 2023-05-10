let input1 = document.querySelector("#rektangel1Input");
let input2 = document.querySelector("#rektangel2Input");
let rektangel1 = document.querySelector("#rektangelen1");
let rektangel2 = document.querySelector("#rektangelen2");


function lageFirkant(input) {
    // if (input1.value > 9 || input1.value < 1 || input2.value < 1 || input2.value > 9) return;
    if (input == 1) {
        let bredde = Number(input1.value);
        let hoyde = 10-bredde;
        rektangel1.style.height = `${hoyde*50}px`;
        rektangel1.style.width = `${bredde*50}px`;
        rektangel1.style.border = "blue solid 3px";
    }else{
        let bredde = Number(input2.value);
        let hoyde = 10-bredde;
        rektangel2.style.height = `${hoyde*50}px`;
        rektangel2.style.width = `${bredde*50}px`;
        rektangel2.style.border = "blue solid 3px";
    }
}