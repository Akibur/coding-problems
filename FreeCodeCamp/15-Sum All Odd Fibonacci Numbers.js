/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

*/
// 1 ,1 2 3 5 8 13
function sumFibs(num) {
    let fibNumber = 1;
    let arr = [1, 1];
    let total = 0;

    for (let i = 1; i < num; i++) {
        arr[i + 1] = arr[i] + arr[i - 1];

    }

    arr.map((el) => {
        if (el % 2 != 0 && el < num) {
            total = total + el;
        }
    });

    console.log(total);

    return total;
}

sumFibs(7);