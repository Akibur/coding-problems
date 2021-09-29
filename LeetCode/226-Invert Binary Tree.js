function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

let root = new TreeNode(4,
    new TreeNode(2,
        new TreeNode(1, undefined, undefined),
        new TreeNode(3, undefined, undefined)
    ),
    new TreeNode(7,
        new TreeNode(6, undefined, undefined),
        new TreeNode(9, undefined, undefined))
);

var invertTree = function (root) {
    if (!root) return root;

    if (root.left) invertTree(root.left);
    if (root.right) invertTree(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;

};

console.log(invertTree(root));