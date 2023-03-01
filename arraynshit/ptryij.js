let rr = [["Spania", "barcelona", "1992"], ["USA", "Atlanta", "1996"], ["Australia", "sydney", "2000"], ["Hellas", "athen", "2004"]]
for (let i = 0; i < rr.length; i++) {
    console.log("Sommer-OL i "+ rr[i][2]+" ble arrangert i "+ rr[i][1]+" i "+ rr[i][0]) 
}
rr.sort()
console.log(rr)
let bokstav = ["T", "r" , "o", "n", "d", "h", "e", "i", "m"]
let gjett = "T";
let a = "";
for (let i = 1; i < 10; i++) {
    console.log(a +" "+i)
    a+=(" "+i)
}



arry = ["hei", "jeg"];
arry.push("hei")
arry.shift()
arry.pop()
arry.splice(0,0,0,1,2,"hei")
console.log(arry)


function beregneSiffre(a) {
    let b = 0;
    for (let i = 0; i < a.length; i++) {
        b+= Number(a[i])
    }return b;
}

console.log(beregneSiffre("123"))

array = [[1231240], [12312312300]]
let antallNull = 0;

for (let i = 0; i < array.length; i++) {
    for (let u = 0; u < array[i].length; u++) {
        if (array[i][u] == 0) {
            antallNull = antallNull + 1;
        }
    }
}
console.log(antallNull)