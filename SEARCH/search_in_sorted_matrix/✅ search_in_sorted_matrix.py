def searchInSortedMatrix(matrix, target):
    row = 0
    col = len(matrix[0]) - 1

    while row < len(matrix) and col >= 0:
        if matrix[row][col] > target:
            # Shift Left
            col -= 1
        elif matrix[row][col] < target:
            # Shift Down
            row += 1
        else:
            return [row, col]
    
    return [-1, -1]
