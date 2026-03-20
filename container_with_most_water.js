/*
Container With Most Water

You are given an integer array heights where heights[i] represents the height of the ith bar. Each bar has a width of 1. The bars are placed next to each other, forming a container. The container can be formed by choosing any two bars and the x-axis, where the two bars are the vertical sides of the container and the x-axis is the horizontal side. The container cannot be slanted.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.

Example 1:
Input: height = [1,7,2,5,4,7,3,6]
Output: 36

Example 2:
Input: height = [2,2,2]
Output: 4

Constraints:
2 <= height.length <= 1000
0 <= height[i] <= 1000
*/

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const area = width * currentHeight;

        maxWater = Math.max(maxWater, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}

// Example usage:
const height = [1, 7, 2, 5, 4, 7, 3, 6];
console.log(maxArea(height)); // Output: 36

