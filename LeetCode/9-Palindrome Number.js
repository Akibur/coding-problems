var isPalindrome = function (x) {
    if (x < 0) return false;

    let dup = x.toString();
    let reverse = dup.split("").reverse().join("");

    return dup == reverse;


};