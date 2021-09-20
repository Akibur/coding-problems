var shuffle = function (nums, n) {
    let nums1 = [...nums.slice(0, n)];
    let nums2 = [...nums.slice(n)];
    let ans = [];
    console.log(nums1);
    console.log(nums2);

    for (let i = 0; i < nums1.length; i++) {
        ans.push(nums1[i]);
        ans.push(nums2[i]);

    }

    return ans;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));