var thirdMax = function (nums) {
    if (nums.length === 1) return nums[0];
    nums.sort((a, b) => b - a);
    nums = Array.from(new Set(nums));
    if (nums.length < 3) return nums[0];
    return nums[2];


};
let nums = [1, 2, 3];
console.log(thirdMax(nums));