// IMPORTS
const { LinkedList, Node } = require('../⭐️ LL_construction/✅ LL_construction.js')

// INITIALIZATION
let reverse_LL_TEST = new LinkedList()
reverse_LL_TEST.insert(new Node(10))
reverse_LL_TEST.insert(new Node(20))
reverse_LL_TEST.insert(new Node(30))

// __ MAIN FUNCTION __
function reverse_LL(LL) {
console.log(LL.printList(), LL.head.value, LL.tail.value)
// -- //
    // Variables
    prev = null
    curr = LL.head

    // Logic
    while (curr !== null) {
        // - 1 - Save next node before overwriting it
        temp = curr.next

        // - 2 - Reverse pointer
        curr.next = prev

        // - 3 - Increment Nodes
        prev = curr
        curr = temp
    }

    // Update Head & Tail
    temp = LL.head
    LL.head = LL.tail
    LL.tail = temp

// Return
return LL }

// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
const reversed_LL = reverse_LL(reverse_LL_TEST)
console.log('Reversed LL',reversed_LL)
console.log(reversed_LL.printList(), reverse_LL_TEST.head.value, reverse_LL_TEST.tail.value)