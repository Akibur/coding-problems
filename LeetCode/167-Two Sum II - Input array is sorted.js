// Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

var twoSum = function (numbers, target) {

    let l = 0;
    let r = numbers.length - 1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[l] + numbers[r] > target) {
            r--;
        } else if (numbers[l] + numbers[r] < target) {
            l++;
        } else {
            return [l + 1, r + 1];
        }
    }
};

let numbers = [2, 7, 11, 15], target = 9;

console.log(twoSum(numbers, target));