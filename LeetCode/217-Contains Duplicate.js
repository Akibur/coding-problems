/*
URL-https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true

My Notes: 
The key to avoiding nested for loops is using dictionaries
*/
//input 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let lookUp = {};

    for (num of nums) {
        lookUp[num] = (lookUp[num] + 1) || 1;
        if (lookUp[num] > 1) return true;

    }
    return false;
    console.log(lookUp);
};

let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
