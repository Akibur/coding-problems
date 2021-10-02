var inorderTraversal = function (root) {
    let curr = root;
    let data = [];
    if (!root) return [];

    function traverse(root) {
        if (root.left) traverse(root.left);
        data.push(root.val);
        if (root.right) traverse(root.right);
    }

    traverse(root);
    return data;
};