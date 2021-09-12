//Sieve of eratosthenes
//https://www.youtube.com/watch?v=pKvGYOnO9Ao&ab_channel=TECHDOSE


var countPrimes = function (n) {

    // create an array for all the numbers from 0 to n and marked them as true
    let isPrime = new Array(n).fill(true);
    // mark 1 as false as it is not prime for sure
    isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (!isPrime[i]) continue;
        for (let j = i * i; j < n; j += i) isPrime[j] = false;
    }

    let count = 0;

    // Count the number of true in the array
    for (let i = 1; i < n; i++) {
        if (isPrime[i]) count++;
    }
    return count;

};

console.log(countPrimes(15));