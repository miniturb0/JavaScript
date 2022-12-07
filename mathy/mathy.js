function calcyp(){
    let nummer1 = document.querySelector("#num1");
    let nummer2 = document.querySelector("#num2");
    let numall = Number(nummer1.value) + Number(nummer2.value);
    document.querySelector("#hei").innerHTML = String(numall);
}
function calcym(){
    let nummer1 = document.querySelector("#num1");
    let nummer2 = document.querySelector("#num2");
    let numall = Number(nummer1.value) - Number(nummer2.value);
    document.querySelector("#hei").innerHTML = String(numall);
}
function calcyt(){
    let nummer1 = document.querySelector("#num1");
    let nummer2 = document.querySelector("#num2");
    let numall = Number(nummer1.value) * Number(nummer2.value);
    document.querySelector("#hei").innerHTML = String(numall);
}
function calcyd(){
    let nummer1 = document.querySelector("#num1");
    let nummer2 = document.querySelector("#num2");
    let numall = Number(nummer1.value) / Number(nummer2.value);
    document.querySelector("#hei").innerHTML = String(numall);
}
function calcysqrt(){
    let nummer1 = document.querySelector("#num1");
    let nummer2 = document.querySelector("#num2");
    let numall1 = Math.sqrt(Number(nummer2.value));
    let numall = Math.sqrt(Number(nummer1.value));

    if (numall1 == ""){
        document.querySelector("#hei").innerHTML = String(numall);
    }else{
        document.querySelector("#hei").innerHTML = String(numall+" and "+numall1);
    }

    
}
function resety(){
    document.querySelector("#hei").innerHTML = "";
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
}
function keepy(){
    document.querySelector("#num1").value = document.querySelector("#hei").innerHTML;
    document.querySelector("#num2").value = "";
    document.querySelector("#hei").innerHTML = "";
}

