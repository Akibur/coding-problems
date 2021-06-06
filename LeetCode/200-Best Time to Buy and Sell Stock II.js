/*
URL-https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

My Notes:
*/

//inputs
let prices = [7, 6, 4, 3, 1];

//desctrucring to get both value and index
var maxProfit = function (prices) {

    let low = prices[0];
    let high = prices[0];
    var profit = 0;

    for (var i = 0; i < prices.length; i++) {

        if (prices[i] < low) {
            low = prices[i];
            high = prices[i];

        }
        if (prices[i] > high) high = prices[i];
        if (high > low) {
            profit = profit + (high - low);
            low = prices[i + 1];
            high = prices[i + 1];
        }

    }



    console.log(profit);


};

maxProfit(prices);