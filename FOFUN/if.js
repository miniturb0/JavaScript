
let n = Math.ceil(Math.random()*9)
for (let i = 0; n != 1; i++) {
    if (n%2==0) {
        n=n/2
    }else {
        n = n*3+1
    }
    console.log(i)
}
console.log(n);