function minNum(samDaily, kellyDaily, difference) {
    // Edge Case
    if (kellyDaily <= samDaily) { return -1 }

    // Variables
    let samTotals = []
    let kellyTotals = []
    let dayIdx = 0

    // Main Logic
    do {
        if (dayIdx === 0 ) {
            samTotals.push(difference + samDaily)
            kellyTotals.push(kellyDaily)
        } else {
            samTotals.push(samTotals[dayIdx -1] + samDaily)
            kellyTotals.push(kellyTotals[dayIdx -1] + kellyDaily)
        }
        dayIdx += 1
    } while (kellyTotals[kellyTotals.length -1 ] <= samTotals[samTotals.length -1 ])

    return dayIdx
}

console.log(minNum(3,5,1))
console.log(minNum(3,5,12))