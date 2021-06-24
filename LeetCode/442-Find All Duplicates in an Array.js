/*
URL-https://leetcode.com/problems/find-all-duplicates-in-an-array/
Given an integer array nums of length n where all the integers of nums are in the range [1, n] 
and each integer appears once or twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant extra space.

My Notes: 
 */
//input 
let nums = [4, 3, 2, 7, 8, 2, 3, 1];

var findDuplicates = function (nums) {
    const map = {};

    for (const val of nums) {
        map[val] = (map[val] + 1) || 1;
    }
    let result = [];
    for (const [k, v] of Object.entries(map)) {

        if (v == 2) {
            result.push(k);

        }

    }
    return result;

};

console.log(findDuplicates(nums));
