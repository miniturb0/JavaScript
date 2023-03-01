function sortereTall(a,b) {
    return a-b
}
let array1 = [2, 1, 7, 5];
let array2 = ["melon", "eple", "appelsin", "ananas", "pære"]
let array3 = [2, 10, 104, 17, 82, 109]
array1.sort(sortereTall)
array2.sort()
array3.sort(sortereTall)
console.log(array1)
console.log(array2)
console.log(array3)
function sortere(a,b){
   return  a[1]-b[1]
}
let personer = [["Nils", 3], ["Hans", 12], ["Sofie", 5]];
personer.sort(sortere)
console.log(personer)

let primtall = [7, 11, 13, 17, 19, 23, 43, 47, 53, 59, 61, 67]
for (let i = 0; i < primtall.length; i++) {
    console.log(primtall[i])
}
ra = [];
function tilfH(a,b) {
    for (let i = 0; i < b; i++) {
        a.push(String(Math.ceil(Math.random()*100)))
    }
}
function sortereTallNedover(a,b) {
    return -(a-b)
}
tilfH(ra,30)
ra.sort(sortereTallNedover)
console.log(ra)
function totall(a,b) {
    if (a > b) {
        return a+"er størst";
    }else if (b > a) {
        return b+"er størst"
    }return "de er like store"
}
console.log(totall(1,1))
function språk(a) {
    if (a == "NOK") {
        return "HEI"
    }if (a == "FRA") {
        return "BONJOUR"
    }if (a == "NED") {
        return "HOI"
    }if (a == "SVE") {
        return "HEI"
    }
}
console.log(språk("FRA"))
function mostellers(h,m) {
    if (h > 210 || m < 40) {
        return "feil"
    }return 1/60*(Math.sqrt(h*m))
}
console.log(mostellers(200,50))

function sumy(a) {
    let b = 0;
    for (let i = 0; i < String(a).length; i++) {
        b = b + Number(String(a)[i])
    }return b
}
console.log(sumy(2008))

let a = 1;
let b = 0;
let f = 0;
for (let i = 1; i < 30; i++) {
    f = a+b
    b = a
    a = f
    console.log(f)
}