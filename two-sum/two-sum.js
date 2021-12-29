/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     const compliment = {};
    for (let i = 0; i < nums.length; i++) {
        if (compliment[nums[i]] >= 0) {
            return [compliment[nums[i]], i];
        }
        compliment[target - nums[i]] = i;
    }
};