var maxDepth = function (s) {
    let depth = 0, stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
            depth = Math.max(depth, stack.length);
        } else if (s[i] === ')') {
            stack.pop();
        }
    }
    return depth;
};

console.log(maxDepth('(1+(2*3)+((8)/4))+1'));