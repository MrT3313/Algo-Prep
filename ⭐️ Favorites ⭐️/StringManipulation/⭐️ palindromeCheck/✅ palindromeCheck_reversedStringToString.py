def isPalindrome_stringConcaf(string):
    reverseString = ''

    for i in reversed(range(len(string))):
        reverseString += string[i]
    
    return string == reverseString


print(isPalindrome_stringConcaf('abcdcba'))
print(isPalindrome_stringConcaf('abcdsba'))

