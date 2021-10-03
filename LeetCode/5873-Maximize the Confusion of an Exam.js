var numOfPairs = function (nums, target) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) {
                continue;
            }
            if (nums[i] + nums[j] == target) count++;

        }
    }

    return count;
};
let nums = ["777", "7", "77", "77"], target = "7777";
console.log(numOfPairs(nums, target));