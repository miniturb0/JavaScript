var flate = document.querySelector("canvas");
var tegne = flate.getContext("2d");
var x = 50;
var y = 50;
var Xspeed = 10;
var Yspeed = 10;
function start(params) {
    tegne.beginPath();
    tegne.clearRect(0,0,1500,700)
    tegne.fillStyle="RED";
    tegne.rect(x,y,50,50);
    tegne.fill();
    if (y+50 > 700 || y < 0) {
        Yspeed = -Yspeed
    }
    if (x+50 > 1500 || x < 0) {
        Xspeed = -Xspeed
    }
    x+= Xspeed;
    y+= Yspeed;
    requestAnimationFrame(start);
}
requestAnimationFrame(start)