var heightChecker = function (heights) {
    let expected = [...heights];
    let i = 0;
    let counter = 0;

    expected.sort((a, b) => a - b);
    while (i < heights.length) {
        if (expected[i] != heights[i])
            counter++;

        i++;
    }
    return counter;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));