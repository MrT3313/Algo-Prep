# LONG SOLUTION
def groupAnagrams(words):
    # Edge Case
    if len(words) == 0:
        return []

    # Variables
    sortedWords = ["".join(sorted(w)) for w in words]
    indecies =  [i for i in range(len(words))]
    indecies.sort(key=lambda x: sortedWords[x])
    result = []
    currentAnagramGroup = []
    currentAnagram = sortedWords[indecies[0]]

    # LOGIC
    for index in indecies:
        word = words[index]
        sortedWord = sortedWords[index]

        if sortedWord == currentAnagram:
            currentAnagramGroup.append(word)
            continue

        result.append(currentAnagramGroup)
        currentAnagramGroup = [word]
        currentAnagram = sortedWord

    result.append(currentAnagramGroup)

    return result


# 'SIMPLE' SOLUTION
# def groupAnagrams(words):
#     anagrams = {}
#     for word in words:
#         sortedWord = "".join(sorted(word))
#         if sortedWord in anagrams:
#             anagrams[sortedWord].append(word)
#         else:
#             anagrams[sortedWord] = [word]
        
#     return list(anagrams.values())