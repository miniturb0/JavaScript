let tre = [["_","_","_"],["_","_","_"],["_","_","_"]];

tre[0][0] = "o";
tre[1][0] = "o";
tre[2][0] =  "o"
tre[2][1] = "o"
tre[2][2] = "x"
tre[2][0] = "o"
console.log(tre);

for (let i = 0; i < tre.length; i++) {
    if (tre[i][0] == tre[i][1] && tre[i][0] == tre[i][2]) {
        console.log("grats W");
    }
}
for (let i = 0; i < tre.length; i++) {
    if (tre[0][i] == tre[1][i] && tre[0][i] == tre[2][i]) {
        console.log("grats W");
    }
}
    if (tre[0][0] == tre[1][1] && tre[0][0] == tre[2][2]) {
        console.log("grats W");
    }
    if (tre[0][2] == tre[1][1] && tre[0][2] == tre[2][0]) {
        console.log("grats W");
    }

gangetabell = [[],[],[],[],[],[],[],[],[],[],[]];

for (let i = 1; i < gangetabell.length; i++) {
        for (let j = 1; j < 11; j++) {
            gangetabell[i][j] = i*j;
        }     
}
console.log(gangetabell)

