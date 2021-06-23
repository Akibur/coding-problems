/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    nums.sort((a, b) => a - b);
    let set = new Set(nums);
    let result = [];

    for (let i = 1; i < nums.length + 1; i++) {

        if (!set.has(i)) {
            result.push(i);
        }
    }

    return result;
};
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));