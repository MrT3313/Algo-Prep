# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def removeKthNodeFromEnd(head, k):
    # Variables
    counter = 1
    first = head
    second = head

    while counter <= k:
        second = second.next
        counter += 1

    # Edge Case
    if second is None:
        # You are at the head node => neex to update head node value
        head.value = head.next.value
        head.next = head.next.next
        return 

    # Standard Case
    while second.next is not None:
        second = second.next
        first = first.next
    
    first.next = first.next.next
        


