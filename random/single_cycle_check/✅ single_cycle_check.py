def hasSingleCycle(array):
    # Variables
    ## Visited Elements == m
    m = 0 
    ## Starting Index 
    start_index = 0
    ## Current Index
    curr_index = start_index

    # Loop
    while m < len(array):
        # Edge Case
        if m > 0 and curr_index == start_index:
            return False

        # Increment Counter
        m += 1

        # Get Next Index
        curr_index = getNext_index(curr_index, array)
    
    # Final Position Check (are we back at the start?)
    return curr_index == start_index
    

def getNext_index(curr_index, array):
    # Variable
    jump = array[curr_index]

    # Modular -> to detect full wrap arounds (what if the number was 40)
    ## [0, 1, 5, 3] --- VS --- [40, 3, 5, 2] ==> 40 would wrap a bunch of times
    next_index = (curr_index + jump) % len(array)

    if next_index >= 0: 
        return next_index
    # Negative Index Edge Case
    else:
        return next_index + len(array)  
