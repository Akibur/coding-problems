var checkIfPangram = function (sentence) {
    const set = new Set(sentence);

    return set.size === 26;
};

console.log(checkIfPangram("asdfasdfg"));