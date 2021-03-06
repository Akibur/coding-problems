// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

//input 
let nums = [1, 0, 2, 3, 0, 4, 5, 0];

3; 4;
//let nums = [1, 0, 0, 2, 0, 4, 5, 0];
let store = null;
var duplicateZeros = function (arr) {
    let possibleDups = 0;
    let length_ = arr.length - 1;

    for (let left = 0; left <= length_ - possibleDups; left++) {

        // Count the zeros
        if (arr[left] == 0) {
            // Edge case: This zero can't be duplicated. We have no more space,
            // as left is pointing to the last element which could be included  
            if (left == length_ - possibleDups) {
                // For this zero we just copy it without duplication.
                arr[length_] = 0;
                length_ -= 1;
                break;
            }
            possibleDups++;
        }
    }

    // Start backwards from the last element which would be part of new array.
    let last = length_ - possibleDups;

    // Copy zero twice, and non zero once.
    for (let i = last; i >= 0; i--) {
        if (arr[i] == 0) {
            arr[i + possibleDups] = 0;
            possibleDups--;
            arr[i + possibleDups] = 0;
        } else {
            arr[i + possibleDups] = arr[i];
        }
    }

};

console.log(duplicateZeros(nums));