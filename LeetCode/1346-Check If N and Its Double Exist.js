var checkIfExist = function (arr) {
    let map = {};
    let isAvailable = false;
    let zero = 0;
    arr.map((el) => {

        if (el == 0) zero++;
        map[el] = el / 2;

        if (map[el * 2]) isAvailable = true;
        if (map[el / 2]) isAvailable = true;


    });
    //check edge case where thre are two zeros
    if (zero > 1) isAvailable = true;

    return isAvailable;
};

let arr = [10, 2, 5, 3];

console.log(checkIfExist(arr));