// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let result = [];
    let l = 0;
    let r = nums.length - 1;
    let p = r;

    while (l <= r) {
        if (nums[l] ** 2 > nums[r] ** 2) {
            result[p] = nums[l] ** 2;
            p--;
            l++;
        }
        else {
            result[p] = nums[r] ** 2;
            r--;
            p--;
        }
    }
    return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));