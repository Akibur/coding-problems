// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */

// naive solution
// var maxProfit = function (prices) {

//     let max = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {
//             if (prices[i] < prices[j]) {
//                 let profit = prices[j] - prices[i];
//                 if (profit > max) {
//                     max = profit;
//                 }

//             }
//         }
//     }

//     return max;
// };

var maxProfit = function (prices) {

    let maxCur = 0, maxSoFar = 0;
    for (let i = 1; i < prices.length; i++) {
        maxCur = Math.max(0, maxCur = maxCur + prices[i] - prices[i - 1]);
        maxSoFar = Math.max(maxCur, maxSoFar);
    }
    return maxSoFar;

};

let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));


