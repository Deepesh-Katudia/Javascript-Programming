/*
Trapping Rain Water 

Problem
You are given an array height where each value represents the height of a bar.
Each bar has width 1.
Return how much rain water can be trapped between the bars.

Example
height = [0,2,0,3,1,0,1,3,2,1]
Output = 9
*/

function trap(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
}