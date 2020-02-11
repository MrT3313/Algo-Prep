def isPalindrom_recursion(string, i = 0):
    # find last item in string
    j = len(string) - 1 - i
    print(string[j])

    return True if i >= j else string[i] == string[j] and isPalindrom_recursion(string, i + 1 ) 

print(isPalindrom_recursion('abcdcba'))
print(isPalindrom_recursion('abcdsba'))