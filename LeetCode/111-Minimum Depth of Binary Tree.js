class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var node = new TreeNode(val);
        let queue = [];
        if (!this.root) {
            this.root = node;
            return this;
        } else {
            let current = this.root;
            queue.push(current);
            while (queue.length != 0) {
                let size = queue.length;

                for (let i = 0; i < size; i++) {
                    current = queue.shift();
                    if (current.left === null) {
                        current.left = node;
                        return this;
                    }
                    else if (current.right === null) {
                        current.right = node;
                        return this;
                    }
                    if (current.left != null) queue.push(current.left);
                    if (current.right != null) queue.push(current.right);
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
            data.push(node.val);
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

    minimumDepthOfBianaryTree() {
        if (!root) return 0;
        let current = root;
        let queue = [];
        let depth = 0;

        queue.push(current);

        while (queue.length != 0) {

            let size = queue.length;
            depth++;

            for (let i = 0; i < size; i++) {
                current = queue.shift();
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);

                if (current.left == null && current.right == null) return depth;

            }


        }

    };

}

var tree = new BST();
tree.insert(3);
tree.insert(9);
tree.insert(20);

tree.insert(15);
tree.insert(7);





console.log(tree.minimumDepthOfBianaryTree());