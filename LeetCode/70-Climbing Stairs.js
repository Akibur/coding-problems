// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


var climbStairs = function (n, memo = {}) {
    if (n in memo) return memo[n];

    if (n == 1) return 1;
    if (n == 2) return 2;

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
    //1,2,3,4,5,6
    //1,2.3.5,8,13
};