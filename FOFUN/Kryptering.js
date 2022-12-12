let alfabet = "abcdefghijk lmnopqrstuvwxyzæøå^";
let tek = "å";
let tek1 = "";
let index = "";
let nyindex = "";
let lengy = tek.length

for (let i = 1; i <= (tek.length); i++) {
    index = alfabet.indexOf(tek[(tek.length)-(lengy)]);
    nyindex = index+1;
    tek1 += alfabet[nyindex];
    lengy--
}
console.log(tek1)

function arealSirkel(radius) {
    console.log(radius*Math.PI)
  }
  
  arealSirkel(24);
  arealSirkel(32);

function volumKule(radius) {
    console.log(radius**2*Math.PI*(4/3))
}

volumKule(11);
volumKule(21);


