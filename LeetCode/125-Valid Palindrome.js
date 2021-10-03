var isPalindrome = function (s) {
    let str = '';
    s.split('').forEach((el) => {
        if (el.match(/^[A-Za-z0-9]+$/)) {
            str = str + el;
        }
    });
    str = str.toLowerCase();
    let reverse = str.split('').reverse().join('');;



    return str === reverse;
};


console.log(isPalindrome("a."));