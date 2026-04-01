/*
Daily Temperatures

Problem
You are given an array:
temperatures[i]
which represents the temperature on day i.
You need to return an array result such that:

result[i]
tells how many days you have to wait after day i to get a warmer temperature.
If no warmer day exists in the future, put 0.

Example 1
temperatures = [30,38,30,36,35,40,28]

Output:
[1,4,1,2,1,0,0]

Why?
day 0 = 30 → warmer day is 38 on day 1 → wait 1 day
day 1 = 38 → warmer day is 40 on day 5 → wait 4 days
day 2 = 30 → warmer day is 36 on day 3 → wait 1 day
day 3 = 36 → warmer day is 40 on day 5 → wait 2 days
day 4 = 35 → warmer day is 40 on day 5 → wait 1 day
day 5 = 40 → no warmer day → 0
day 6 = 28 → no future day → 0
*/

function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const prevIndex = stack.pop();
            result[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }
    return result;
}

// Example usage:
const temperatures = [30, 38, 30, 36, 35, 40, 28];
console.log(dailyTemperatures(temperatures)); // Output: [1, 4, 1, 2, 1, 0, 0]
