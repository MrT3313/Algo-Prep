def isPelindrom_indexCheck(string):
    left_idx = 0
    right_idx = len(string) - 1

    while left_idx < right_idx:
        if string[left_idx] != string[right_idx]:
            return False
        left_idx += 1
        right_idx -= 1
    return True

print(isPelindrom_indexCheck('abcdcba'))
print(isPelindrom_indexCheck('abcdsba'))