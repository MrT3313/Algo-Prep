def longestPeak(array):
    longestPeakLength = 0
    i = 1 # Peak cant start at 0

    while i < len(array) - 1:
        isPeak = array[i - 1] < array[i] and array[i] > array[i + 1]
        if not isPeak:
            i += 1
            continue
        
        # Check Left Tail
        leftIdx = i - 2 
        while leftIdx >= 0 and array[leftIdx] < array[leftIdx + 1]:
            leftIdx -= 1
			
        # Check Right Tail
        rightIdx = i + 2
        while rightIdx < len(array) and array[rightIdx] < array[rightIdx - 1]:
            rightIdx += 1
        
        # Calc Peak Length
        currentPeakLength = rightIdx - leftIdx - 1
        longestPeakLength = max(longestPeakLength, currentPeakLength)

        # Jump to next index to contiue first traversal
        i = rightIdx
    
    # Return
    return longestPeakLength