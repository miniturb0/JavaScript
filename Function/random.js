// Funksjonen tar imot 2 parametere, og returnerer et filfeldig tall fra og med x til og med y //

function randomy(x,y) {
    return Math.floor(Math.random()*(y-x+1)+x)
}

console.log(randomy(10,20))

for (let i = 0; i < 20; i++) {
    
    console.log(randomy(10,20))
}