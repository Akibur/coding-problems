var sortArrayByParity = function (nums) {
    let left = 0;
    let right = 0;

    while (right < nums.length) {

        if (nums[right] % 2 != 0) {
            right++;
        } else {
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left++;
            right++;
        }
    }

    return nums;

};