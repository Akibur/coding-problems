// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function (nums, target) {
    //brute force approch
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {

    //         if (i == j) {
    //             continue;
    //         }

    //         if (nums[i] + nums[j] == target) {
    //             return [i, j];
    //             break;
    //         }
    //     }

    // }

    //Using hash maps and complements 
    const compliment = {};
    for (let i = 0; i < nums.length; i++) {
        if (compliment[nums[i]] >= 0) {
            return [compliment[nums[i]], i];
        }
        compliment[target - nums[i]] = i;
    }
};
let nums = [2, 7, 11, 15], target = 9;

console.log(twoSum(nums, target));
