/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

My Notes: 
The key to avoiding nested for loops is using dictionaries
*/
//input 
let nums = [5, 10];

var sumAll = function (arr) {
    let n1 = arr[0];
    let n2 = arr[1];
    let total = 0;
    if (n1 > n2) {
        while (n1 >= n2) {
            total = total + n2;
            n2++;
        }
        return total;


    }
    else if (n2 > n1) {
        while (n2 >= n1) {
            total = total + n1;
            n1++;

        }

        return total;
    } else {
        return n1 + n2;
    }
};

console.log(sumAll([5, 10]));


