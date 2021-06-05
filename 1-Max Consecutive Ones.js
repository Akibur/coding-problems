/*
URL-https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. 
The maximum number of consecutive 1s is 3.

My Notes: 
The key to avoiding nested for loops is using dictionaries
*/
//input 
let nums = [1, 1, 1, 1];


var findMaxConsecutiveOnes = function (nums) {
    let ans = [];
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) {
            counter++;
        }
        if (nums[i] == 0 || nums[i + 1] == undefined) {
            ans.push(counter);
            counter = 0;

        }


    }
    ans.sort(function (a, b) { return b - a; });

    console.log(ans);

};

findMaxConsecutiveOnes(nums);