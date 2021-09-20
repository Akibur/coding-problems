var smallerNumbersThanCurrent = function (nums) {
    const res = [];
    counter = 0;
    let copy = [...nums];
    nums.sort((a, b) => a - b);

    copy.forEach((num, idx) => {
        res.push(nums.indexOf(num));

    });
    return res;

};

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));