var maxDepth = function (root) {
    if (!root) return 0;
    let queue = [root];
    let depth = 0;
    let curr = root;
    while (queue.length) {
        var curLevelLen = queue.length;
        for (var i = 0; i < curLevelLen; i++) {
            curr = queue.shift();
            for (child of curr.children) {
                queue.push(curr);
            }
        }
        depth++;
    }
    return depth;
};