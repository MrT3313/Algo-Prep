def groupAnagrams(strs):
    result = {}
    for i in strs: 

        # Turn string into sorted string
        x = ''.join(sorted(i))
        print(x)

        if x in result: 
            # Add ORIGIONAL STRING To That Result Group 
            result[x].append(i)

            print(result)
        else:
            # Add ORRIGIONAL STRING To New Result Group
            result[x] = [i]
            print(result)

    # Return
    ## Want to return a SINGLE LIST of all the indvidual VALUES 
    ## (group of anagrams) instead of current Result Object. 
    return list(result.values())

print(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))