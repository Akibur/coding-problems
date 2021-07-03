
// Given an array of integers arr, return true if and only if it is a valid mountain array.

var validMountainArray = function (arr) {

    let N = arr.length;
    let i = 0;

    // walk up
    while (i + 1 < N && arr[i] < arr[i + 1])
        i++;

    // peak can't be first or last
    if (i == 0 || i == N - 1)
        return false;

    // walk down
    while (i + 1 < N && arr[i] > arr[i + 1])
        i++;

    return i == N - 1;
};
