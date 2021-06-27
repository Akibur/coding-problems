class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        } else {
            let current = this.root;
            while (1) {
                if (current.val > node.val) {
                    if (current.left === null) {
                        current.left = node;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (current.val < node.val) {
                    if (current.right === null) {
                        current.right = node;
                        return this;
                    } else {
                        current = current.right;
                    }
                } else {
                    //If value is already inserted
                    return this;
                }

            }
        }
    }
}

var tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);