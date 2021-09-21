var numOfStrings = function (patterns, word) {
    let counter = 0;
    patterns.map((w) => {
        if (word.includes(w)) counter++;
    });

    return counter;
};

let patterns = ["a", "abc", "bc", "d"], word = "abc";

console.log(numOfStrings(patterns, word));