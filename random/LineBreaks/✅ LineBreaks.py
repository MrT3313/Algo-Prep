def LineBreaks(string, k):
    stringArray = string.split(' ')
    
    # Recursive Function
    def splitwords(remainingWords, result = [], maxLength = k):
        # Base Case
        if len(remainingWords) == 0: 
            return result
        if len(remainingWords) == 1 and len(remainingWords[0]) < k:
            result.append(remainingWords[0])
            return result
        if len(remainingWords) == 1 and len(remainingWords[0]) > k:
            return None
        
        # Main
        i, j = 0, 1 
        while ( len(''.join(remainingWords[i:j])) < maxLength ):
            j += 1

        result.append(' '.join(remainingWords[i:j - 1]))
        
        # Recurse
        return splitwords(remainingWords[j-1:], result, maxLength)

    return splitwords(stringArray)

print(LineBreaks('the quick brown fox jumps over the lazy dog', 10))

