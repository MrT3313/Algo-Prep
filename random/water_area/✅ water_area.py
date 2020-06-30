def waterArea(heights):
    # Left Max Array
    maxes = [0 for x in heights]
    leftMax = 0
    for i in range(len(heights)):
        height = heights[i]
        maxes[i] = leftMax
        leftMax = max(leftMax, height)
    # Right Max Array
	rightMax = 0
    for i in reversed(range(len(heights))):
        height = heights[i]
        minHeight = min(rightMax, maxes[i])
    # Water Array
        if height < minHeight: 
            maxes[i] = minHeight - height
        else:
            maxes[i] = 0

        rightMax = max(rightMax, height)
	
	# Return 
	return sum(maxes)



waterArea([0,8,0,0,5,0,0,10,0,0,1,1,0,3])