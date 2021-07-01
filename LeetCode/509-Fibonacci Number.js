// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, memo = {}) {
    if (n in memo) return memo[n];
    if (n == 0) return 0;
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

//using iteration

// const fib = N => {
//     let arr = [0, 1];

//     for (let i = 2; i <= N; i++) {
//         arr.push(arr[i-2] + arr[i-1]);
//     }

//     return arr[N];
// };