function _event(){
    innElement = document.querySelector("#inn");
    innElement2 = document.querySelector("#inn2");

    if (Number(innElement.value) > Number(innElement2.value)){
        document.querySelector("#head").innerHTML = innElement.value+ " er størst";
    }else if (Number(innElement.value) < Number(innElement2.value)){
        document.querySelector("#head").innerHTML = innElement2.value+ " er størst"
    }else{
        document.querySelector("#head").innerHTML = "Begge har samme verdi"
    }



    console.log(inputValue,inputValue2);
    innElement.value = "";
    innElement2.value = "";
}

function speaks(){
    let lang = document.querySelector("#speak");
    if (lang.value == "NOK"){
        document.querySelector("#langua").innerHTML = "Hei verden!";
    }else if (lang.value == "FRA"){
        document.querySelector("#langua").innerHTML ="Bonjour monde!"
    }else if (lang.value == "NED"){
        document.querySelector("#langua").innerHTML ="Hoi!"
    }

    lang.value = "";
}







