var getConcatenation = function (nums) {
    let ans = [...nums];

    return [...ans, ...nums];
};

console.log(getConcatenation([1, 2, 3]));