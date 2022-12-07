// for(let i = 0; i <= 50; i++){
//     console.log(i)
// }
// let i = 0;

// while(i <= 50){
//     console.log(i);
//     i++
// }

// for(let w = 3; w <= 999; w = w*3){
//     console.log(w);
// }


// let sum = 0;
// for(let i = 0;i <= 100;i++){
//     sum = sum+i;
// }
// console.log(sum);

for (let i = -20; i <= 20 && i >= -20; i++) {
    if (i == -13 || i == 13){
    }else{
        console.log(i)
    }
}



for (let i = 99; i >=1 ; i--) {
    if (i%2==0){
        console.log("Ta en ned og send den rundt, "+i+" flasker med brus på hylla.")
    }else{
        console.log(+i+" flasker med brus på hylla, "+i+" flasker med brus")
    }
}


arry = [];

function par(){
    arry.push(document.querySelector("#suh").value)
    document.querySelector("#h1").innerHTML = arry[0]
    console.log(arry);
}

