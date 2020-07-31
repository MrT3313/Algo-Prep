def reverseLinkedList(head):
    # Variables 
    p1, p2 = None, head
    
    # Logic
    while p2 is not None:
        # Save next node before its overwritten
        p3 = p2.next
        # Reverse Pointer
        p2.next = p1
        # Increment Nodes
        p1 = p2
        p2 = p3
    
    # Return
    return p1