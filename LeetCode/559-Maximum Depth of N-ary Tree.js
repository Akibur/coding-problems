var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    const q = [root];
    let depth = 0;
    while (q.length) {
        const size = q.length;
        ++depth;
        for (let i = 0; i < size; ++i) {
            const node = q.shift();
            node.children.forEach(child => q.push(child));
        }
    }
    return depth;
};