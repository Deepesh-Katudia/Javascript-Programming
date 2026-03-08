/*
Squares of a Sorted Array (Easy)

Problem
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number, also sorted in non-decreasing order.

Example 1
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Constraints
1 <= nums.length <= 10^4
-10^4 <= nums[i] <= 10^4
nums is sorted in non-decreasing order
*/

function sortedSquares(nums) {
  const result = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1
  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];
    if (leftSquare > rightSquare) {
      result[index] = leftSquare;
      left++;
    } else {
      result[index] = rightSquare;
      right--;
    }
    index--;
  }
  return result;
}

// Test cases
console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0, 1, 9, 16, 100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4, 9, 9, 49, 121]
