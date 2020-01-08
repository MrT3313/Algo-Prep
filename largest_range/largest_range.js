// - 1 - // ❌
function lartest_range_NAIVE() {

}

// - 2 - // ✅
function largest_range(array) {
    // Variables
    bestRange = []
    longestLength = bestRange.length
    nums_hash = {}

    // Fill Hash Table
    array.forEach(item => nums_hash[item] = true)
    console.log(nums_hash)

    // Should Value Be Checked?
    array.forEach(num => {
        console.log(num)
        console.log(nums_hash[num])
        if (nums_hash[num] !== true) {
            console.log(`We have already checked ${num}`)
        } else {
            // Set it to false --> since we are now checking it
            nums_hash[num] = false

            // Set Current Length
            currentLength = 1

            // Get Outside Numbers
            left = num - 1 
            right = num + 1
            console.log(left, right)

            // LEFT -- Is in hash table
            while (
                Object.keys(nums_hash).includes(left.toString())
            ) {
                nums_hash[left.toString()] = false
                currentLength += 1
                left -= 1
            }

            // RIGHT -- Is in hash table
            while(
                Object.keys(nums_hash).includes(right.toString())
            ) {
                nums_hash[right.toString()] = false
                currentLength += 1
                right += 1
            }

            // Update Best Length??
            console.log(currentLength)
            console.log(longestLength)

            if (currentLength > longestLength) {
                longestLength = currentLength
                bestRange = [left + 1, right - 1]
                console.log(bestRange)
            }
        }
    })
return bestRange}

largest_range([1,11,3,0,15,5,2,4,10,7,12,6])