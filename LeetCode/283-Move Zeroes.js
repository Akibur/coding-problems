var moveZeroes = function (nums) {
    if (nums.length == 0 || nums.length == 1) return;
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[right] == 0) {

            right++;
        } else {
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left++;
            right++;
        }
    }


};

let nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums));