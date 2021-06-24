/*
URL-https://leetcode.com/problems/single-number/

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/
//input 
let nums = [4, 1, 2, 1, 2];

var singleNumber = function (nums) {

    let map = {};

    for (const num of nums) {
        map[num] = map[num] + 1 || 1;
    }

    for (const [k, v] of Object.entries(map)) {
        if (v < 2) {
            return k;
        }
    }
};

console.log(singleNumber(nums));
