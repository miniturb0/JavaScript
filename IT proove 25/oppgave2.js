let land = [["Norge", "Krone","NOK", 1], ["Bulgaria", "Lev", "BGN", 0.18], ["New Zealand","Dollar","NZD", 0.16],["Mexico", "Peso", "MXN", 1.9], ["Russland", "Ruble", "RUB", 0.14]];

function skriveUt() {
    for (let i = 0; i < land.length; i++) {
        console.log("Land "+land[i][0]+" bruker "+land[i][1]+" med "+land[i][2]+" som valutakode")
    }
}

function sortereLand(a,b) {
    return a[3]-b[3]
}

skriveUt()
land.sort(sortereLand)
console.log(land)

function omgj(valutakode,sum) {
    if (valutakode=="BGN") {
        return 0.18*sum
    }else if (valutakode=="NZD") {
        return 0.16*sum
    }else if (valutakode=="MXN") {
        return 1.9*sum
    }else {
        return 0.14*sum
    }
}console.log(omgj("NZD",30))