function deviceNameSystem(names) {
    // Variables
    let data = {}
    let uniqueResults = []

    // Main Logic
    names.forEach(item => {
        console.log(data)
        if(!data[item]) {
            data[item] = 1;
            uniqueResults.push(item);
        } else {
            uniqueResults.push(`${item}${data[item]}`);
            data[item] += 1
        }
    }) 
    return uniqueResults
}

console.log(deviceNameSystem(['switch', 'tv','switch', 'tv','switch', 'tv']))
console.log(deviceNameSystem(['mixer', 'toaster', 'mixer', 'tv']))