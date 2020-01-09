class BST {
    // - 1 - // CONSTRUCTOR
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    // - 2 - // METHODS
    insert(value) {
        // *** V1 *** //
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

    contains(value) {
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
            return true
        }
    }

    remove(value, parent = null) {
        // *** V1 *** //
        if (value < this.value) {
            if (this.left !== null) {
                this.left.remove(value, this)
            }
        } else if (value > this.value) {
            if (this.right !== null) {
                this.right.remove(value, this)
            }
        } else {
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
            } else if (parent.left == this) {
                parent.left = this.left !== null ? this.left : this.right
            } else if (parent.right == this ) {
                parent.right = this.left !== null ? this.left : this.right
            }
        }
        return this
    }

    // HELPER METHODS
    getMinValue() {
        // *** V1 *** //
        if (this.left === null ) {
            return this.value
        } else {
            return this.left.getMinValue()
        }
    }
}

let test_BST_class = new BST(12)
console.log(test_BST_class)

test_BST_class.insert(8)
test_BST_class.insert(13)
test_BST_class.insert(16)

console.log(test_BST_class)
console.log(test_BST_class.contains(13))
console.log(test_BST_class.contains(11))