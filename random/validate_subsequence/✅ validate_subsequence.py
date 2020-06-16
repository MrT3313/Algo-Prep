# V1
# def isValidSubsequence(array, sequence):
#     arrayIdx = 0 
#     seqIdx = 0

#     while arrayIdx < len(array) and seqIdx < len(sequence):
#         if array[arrayIdx] == sequence[seqIdx]:
#             seqIdx += 1
        
#         arrayIdx += 1

#     return seqIdx == len(sequence)

# V2
def isValidSubsequence(array, sequence):
    seqIdx = 0
    for value in array:
        if seqIdx == len(sequence):
            break
        if sequence[seqIdx] == value:
            seqIdx += 1
    return seqIdx == len(sequence)
        