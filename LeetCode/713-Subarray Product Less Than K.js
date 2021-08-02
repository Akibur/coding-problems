// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.



var numSubarrayProductLessThanK = function (nums, k) {
    let res = 0;
    let l = 0;
    let product = 1;

    for (let r = 0; r < nums.length; r++) {
        product *= nums[r];

        if (product >= k) {
            while (product >= k && l <= r) {
                product /= nums[l];

                l++;
            }
        }
        res += (r - l) + 1;
    }

    return res;

};

let nums = [10, 5, 2, 6], k = 100;

console.log(numSubarrayProductLessThanK(nums, k));