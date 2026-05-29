/*
121. Best Time to Buy and Sell Stock

You are given an array called prices.

Each index represents a day, and each value represents the stock price on that day.

Example:

prices = [7, 1, 5, 3, 6, 4]

This means:

Day 1: price = 7
Day 2: price = 1
Day 3: price = 5
Day 4: price = 3
Day 5: price = 6
Day 6: price = 4

You need to choose:

1 day to buy
1 future day to sell

Your goal is to get the maximum profit.

Important rule

You must buy before you sell.

So this is allowed:

Buy on day 2
Sell on day 5

But this is not allowed:

Sell on day 1
Buy on day 2

Because selling before buying does not make sense.

*/

var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i=0; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let profit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
};