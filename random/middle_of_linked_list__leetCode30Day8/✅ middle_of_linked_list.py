class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

def middleNode(head):
    # Variables
    slow = head
    fast = head

    # Edge Case
    if head.next == None:
        return head

    while True:
        # Check Fast Position / Prep Return / Return
        if fast.next == None: 
            return slow

        if fast.next.next == None:
            # Increment Slow to second middle node
            slow = slow.next
            return slow

        # Increment
        slow = slow.next
        fast = fast.next.next

