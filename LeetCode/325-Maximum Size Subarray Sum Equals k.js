// Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn’t one, return 0 instead.

// Note:

// The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

// Example 1:

// Input: nums = [1, -1, 5, -2, 3], k = 3
// Output: 4
// Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
//Solution : https://www.geeksforgeeks.org/longest-sub-array-sum-k/
//input 
let nums = [1, -1, 5, -2, 3], k = 3;

var longestSubArray = function (nums, k) {
    let map = [];
    let maxLen = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {

        sum = sum + nums[i];
        if (!map[sum]) {
            map[sum] = i;
        }

        if (sum == k) {
            maxLen = i + 1;
        }

        if (map[sum - k]) {
            if (maxLen < (i - map[sum - k])) {
                maxLen = i - map[sum - k];
            }
        }

    }


    return maxLen;
};

console.log(longestSubArray(nums, k));