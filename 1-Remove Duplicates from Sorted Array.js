/*
URL-https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. 
It doesn't matter what you leave beyond the returned length.

My Notes: 
*/

//Inputs
let nums = [1, 1, 6];


var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {

            let startSpliceIndex = i == 0 ? 0 : i + 1;

            let removeItems = 0;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    removeItems++;
                }
                else {
                    break;
                }

            }
            console.log(startSpliceIndex);
            console.log(removeItems);

            nums.splice(startSpliceIndex, removeItems);

        }

    }

    console.log(nums);

};

removeDuplicates(nums);
