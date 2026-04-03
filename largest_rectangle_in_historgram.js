/*
Largest Rectangle In Histogram

You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.
Return the area of the largest rectangle that can be formed among the bars.
Note: This chart is known as a histogram.

Example 1:
Input: heights = [7,1,7,2,2,4]
Output: 8

Example 2:
Input: heights = [1,3,7]
Output: 7

Constraints:
1 <= heights.length <= 1000.
0 <= heights[i] <= 1000

*/

function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        let currHeight = i === heights.length ? 0 : heights[i];
        while (
            stack.length > 0 &&
            currHeight < heights[stack[stack.length - 1]]
        ) {
            const topIndex = stack.pop();
            const height = heights[topIndex];
            const width =
                stack.length === 0
                    ? i
                    : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}

// Example usage:
console.log(largestRectangleArea([7, 1, 7, 2, 2, 4]));
console.log(largestRectangleArea([1, 3, 7]));
