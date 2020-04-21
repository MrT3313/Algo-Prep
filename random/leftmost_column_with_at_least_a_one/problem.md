def leftmostColumnWithOne(self, binaryMatrix):
    dim = binaryMatrix.dimensions()
    rows = dim[0]
    cols = dim[1]

    if rows == 0 or cols == 0:
        return -1
    
    result = -1
    r = 0
    c = cols - 1

    while r < rows and c >= 0:
        if binaryMatrix.get(r,c) == 1:
            result = c
            c -= 1
        else: 
            r += 1
        
        return result
