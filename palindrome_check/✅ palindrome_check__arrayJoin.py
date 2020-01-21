def isPelindrom_arrayJoin(string):
    reverseChars = []

    for i in reversed(range(len(string))):
        reverseChars.append(string[i])
    
    return string == "".join(reverseChars)

print(isPelindrom_arrayJoin('abcdcba'))
print(isPelindrom_arrayJoin('abcdsba'))