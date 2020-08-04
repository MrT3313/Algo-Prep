Example:
    null <-> [10] <-> [20] <-> [30] <-> null

Methods: 
    A) Generic  
        1. [x][x] contains (val = null, index = null) => [prev, foundNode] || -1 (value not found)  
        2. [x][x] printList => [ node.value, ... ] 
    B) Actions  
        1. [x][x] setHead (nodeToInsert) => newList  
        2. [x][x] setTail (nodeToInsert) => newList  
        3. [x][x] insert (nodeToInsert, val=null, idx=null, position=[before || after]) => newList || -1 
            - insertPosition(nodeToInsert, position=[before || after], current) => newList  
        4. [x][x] remove (nodeToRemove) => newList || -1 (value not found)  


