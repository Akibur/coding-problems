var restoreString = function (s, indices) {
    let res = [...s];


    s.split('').forEach((char, idx) => {
        res[indices[idx]] = char;
    });

    return res.join('');
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));