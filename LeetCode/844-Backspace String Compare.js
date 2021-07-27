// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

var backspaceCompare = function (s, t) {
    var backspaceCompare = function (S, T) {
        const handleBackSpace = (str) => {
            let stack = [];
            let i = 0;
            while (i < str.length) {
                if (str[i] === '#') stack.pop();
                else stack.push(str[i]);
                i++;
            }
            return stack.join('');
        };
        return handleBackSpace(S) === handleBackSpace(T);
    };
};

let s = "ab#c", t = "ad#c";

console.log(backspaceCompare(s, t));
