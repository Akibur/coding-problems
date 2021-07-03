// Given an array arr, replace every element in that array with 
// the greatest element among the elements to its right, and 
// replace the last element with -1.

// After doing so, return the array.

var replaceElements = function (arr) {
    //arr[arr.length - 1] = -1;

    let temp = 0;
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    for (let i = arr.length - 2; i >= 0; --i) {
        temp = arr[i];
        arr[i] = max;

        if (temp > max) {
            max = temp;
        }
    }
    return arr;
};

arr = [400];

console.log(replaceElements(arr));