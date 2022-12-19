

for (let i = 1; i <= 10; i++) {
    for (let p = 1; p <= 10; p++) {
        console.log(i*p)
    }
}
let o = 0;
let s = 1;

for (let i = 0; i <= 10;i++){
    console.log(o);
    let _o = o;
    o = s;
    s += _o;
}



console.log("Around the world \n".repeat(144));


console.log(("gucci gang ".repeat(9)+" spend three racks on new chains ").repeat(74))

let vers1 = "A well a everybody's heard about the bird B-b-b bird, bird, bird, b-bird's the word";
let vers2 = "A well a don't you know about the bird? Well, everybody knows that the bird is the word!";
let vers3 = "Surfin' bird  B-b-b aah, aah!";
let refreng1 = "A well a bird, bird, bird, the bird is the word";
let refreng2 = "A well a bird, bird, bird, well the bird is the word";

console.log(vers1)
for (let i = 0; i < 7; i++) {
    if (i%2) {
        console.log(refreng2)
    }else{
        console.log(refreng1)
    }
}
console.log(vers2)
for (let i = 0; i < 7; i++) {
    if (i%2) {
        console.log(refreng2)
    }else{
        console.log(refreng1)
    }
}
console.log(vers3)

