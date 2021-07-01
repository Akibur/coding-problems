// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

var runningSum = function (nums) {

    let result = [nums.length];
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) { result[i] = nums[i]; }
        else {
            result[i] = result[i - 1] + nums[i];
        }

    }
    return result;
};

console.log(runningSum([3, 1, 2, 10, 1]));