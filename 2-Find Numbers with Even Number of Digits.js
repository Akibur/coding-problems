/*
URL-https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.

My Notes: 
Foreach takes more time than a typical for loop
*/


let nums = [0, 901, 482, 1771, 1010];

var findNumbers = function (nums) {
    let counter = 0;
    nums.forEach(element => {
        let digits = element.toString().split("");
        console.log(digits);

    });
    return counter;
    //For loop implementation
    // for (let i = 0; i < nums.length; i++) {
    //     let digits = nums[i].toString().split("");
    //     if (digits.length % 2 == 0) counter++;
    // }
};


console.log(findNumbers(nums));