var interpret = function (command) {
    let arr = command.split("");
    res = [];
    arr.forEach((char, idx) => {
        if (char == 'G') res.push('G');
        if (char == '(') {
            if (arr[idx + 1] == 'a') res.push('al');
            if (arr[idx + 1] == ')') res.push('o');
        }
    });

    return res.join('');

};

console.log(interpret(command = "G()(al)"));