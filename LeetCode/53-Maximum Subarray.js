var maxSubArray = function (nums) {
    var prevSum = 0;
    var max = -Infinity;

    for (var i = 0; i < nums.length; i++) {
        prevSum = Math.max(prevSum + nums[i], nums[i]);
        max = Math.max(max, prevSum);
    }
    return max;
};
// -1 -4 0 -1 1 2 -3 -1
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));