// Given an array of positive integers nums and a positive integer target,
//  return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] 
//  of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.


let target = 11, nums = [1, 1, 1, 1, 1, 1, 1, 1];

var minSubArrayLen = function (nums, target) {
    let windowStart = 0;
    let sum = 0;
    let arrLen = Number.POSITIVE_INFINITY;
    //loop through the array
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        //sum the numbers
        sum += nums[windowEnd];

        //if sum is greater than target sum reduce window start
        while (sum >= target) {
            arrLen = Math.min(arrLen, (windowEnd - windowStart) + 1);
            sum = sum - nums[windowStart];
            windowStart++;
        }


    }
    if (arrLen == Number.POSITIVE_INFINITY) {
        return 0;
    } else
        return arrLen;
};

console.log(minSubArrayLen(nums, target));
