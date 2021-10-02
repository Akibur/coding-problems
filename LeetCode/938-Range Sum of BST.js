var rangeSumBST = function (root, low, high) {
    let sum = 0;

    function traverse(root) {
        if (root.val >= low && root.val <= high) sum = sum + root.val;
        if (root.left) traverse(root.left);
        if (root.right) traverse(root.right);
    }

    traverse(root);

    return sum;
};