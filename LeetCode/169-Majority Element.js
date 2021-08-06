// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



let nums = [2, 2, 1, 1, 1, 2, 2];

var majorityElement = function (nums) {

    //Problem solved using  Moore's Voting Algorithm

    let majority = nums[0];
    let count = 1;


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == majority) {
            count += 1;

        } else {
            count -= 1;
            if (count == 0) {
                majority = nums[i];
                count = 1;

            }
        }
    }

    return majority;












    //Problem solved using hash map

    // let map = {};
    // let maxVal = 0;
    // let maxKey = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     map[nums[i]] = map[nums[i]] + 1 || 1;
    // }
    // console.log(map);
    // for (item in map) {
    //     console.log(item);

    //     if (map[item] >= maxVal) {
    //         maxVal = map[item];
    //         maxKey = item;
    //     }


    // }

    // return maxKey;
};

