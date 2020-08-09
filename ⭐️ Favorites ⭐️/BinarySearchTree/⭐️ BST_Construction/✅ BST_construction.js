// CLASS
// - 1 - Main BST Class
class BST {
    // - 1 - // CONSTRUCTOR ✅
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
// EXPORT
module.exports = BST

// PROTOTYPES
// GENERIC METHODS
// - 2.1 - // Contains ✅
BST.prototype.contains = function(value) { 
    // *** V1 *** //
    if (value < this.value) {
        if (this.left === null) {
            return false
        } else {
            return this.left.contains(value)
        }
    } else if (value > this.value) {
        if (this.right === null) {
            return false
        } else {
            return this.right.contains(value)
        }
    } else {
        return this
    }
}


// - 3 - Action Methods
// - 3.1 - // Insert ✅
BST.prototype.insert = function(value) { 
    if (value < this.value) {
        if (this.left === null) {
            this.left = new BST(value)
        } else {
            this.left.insert(value)
        }
    } else {
        if (this.right === null) {
            this.right = new BST(value)
        } else {
            this.right.insert(value)
        }
    }
    return this
}

// - 3.2 - // Remove ✅
BST.prototype.remove = function(value, parent = null) { 
    if (value < this.value && this.left !== null) {
        this.left.remove(value, this)
    } else if (value > this.value && this.right !== null) {
        this.right.remove(value, this)
    } else {
        // Grab Smallest Value In RIGHT subtree => Leftmost Value In RIGHT Subtree
        if (this.left !== null && this.right !== null) {
            this.value = this.right.getMinValue()
            this.right.remove(this.value, this)
        } else if (parent === null) {
            if (this.left !== null) {
                this.value = this.left.value
                this.right = this.left.right
                this.left = this.left.left
            } else if (this.right !== null) {
                this.value = this.right.value
                this.left = this.right.left 
                this.right = this.right.right
            } else {
                this.value = null
            }
        } else if (parent.left === this) {
            parent.left = this.left !== null ? this.left : this.right
        } else if (parent.right === this ) {
            parent.right = this.left !== null ? this.left : this.right
        }
    }
    return this
}


// HELPER METHODS
// - 4.1 - // Get Minimum Value ✅
BST.prototype.getMinValue = function() { 
    // *** V1 *** //
    if (this.left === null ) {
        return this.value
    } else {
        return this.left.getMinValue()
    }
}

// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
// -- *** TESTS *** -- //
let test_BST_class = new BST(10)
console.log(test_BST_class)

test_BST_class.insert(20)
test_BST_class.insert(0)
test_BST_class.insert(15)
test_BST_class.insert(5)
console.log(test_BST_class)

console.log(test_BST_class.contains(20))
console.log(test_BST_class.contains(0))
console.log(test_BST_class.contains(11))

console.log(test_BST_class.contains(10))
test_BST_class.remove(10)
console.log(test_BST_class.contains(10))
console.log(test_BST_class)