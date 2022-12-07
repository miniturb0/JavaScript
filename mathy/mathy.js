function stripString(str) {
    let outStringArray = [];
    const allowedCharacters = "0123456789+-*/^()%=<>qwertyuiopasdfghjklzxcvbnm"
    for (let i = 0; i < str.length; i++) {
        if (allowedCharacters.includes( str[i]) ) {
            outStringArray.push(str[i])
        }
    }
    let outString = outStringArray.join("")
    return outString
}

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
    }else if (numall == ""){
        document.querySelector("#hei").innerHTML = String(numall1);
    }else{
        document.querySelector("#hei").innerHTML = String(numall+" and "+numall1);
    }

    
}
function calcyeval(){
    let nummer1 = document.querySelector("#num1");
    let nummer2 = document.querySelector("#num2");
    let numall1 = math.evaluate(stripString( nummer2.value));
    let numall = math.evaluate(stripString(nummer1.value));
    console.log(nummer2.value)
    if (nummer2.value == ""){
        document.querySelector("#hei").innerHTML = String(numall);
    }else if (nummer1.value == ""){
        document.querySelector("#hei").innerHTML = String(numall1);
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
function calcypot(){
    let nummer1 = document.querySelector("#num1");
    let nummer2 = document.querySelector("#num2");
    let numall = Number(nummer1.value) ** Number(nummer2.value);
    document.querySelector("#hei").innerHTML = String(numall);


}
