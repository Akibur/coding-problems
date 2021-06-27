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

    find(val) {
        if (!this.root) return false;
        let current = this.root;
        while (1) {
            if (current.val === val) return true;

            if (current.val > val) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current == null) return false;
        }
    }

    BFS() {
        let node = this.root;
        let data = [];
        let queue = [];

        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    DFSPreOrder() {
        let current = this.root;
        let data = [];
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
    }
    DFSPostOrder() {
        let current = this.root;
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);

        }

        traverse(this.root);
        return data;
    }
    DFSInOrder() {
        let current = this.root;
        let data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);
        return data;
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
console.log(tree.find(10));
console.log(tree.find(500));
console.log(tree.find(16));
