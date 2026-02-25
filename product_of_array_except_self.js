/*
Product of Array Except Self (Medium)
📌 Problem
Given an integer array nums, return an array answer such that:
answer[i] = product of all elements except nums[i]

Constraints:
You cannot use division
Must run in O(n) time

Example
nums = [1,2,3,4]
Output = [24,12,8,6]

Explanation:

For index 0 → 2*3*4 = 24
For index 1 → 1*3*4 = 12
For index 2 → 1*2*4 = 8
For index 3 → 1*2*3 = 6
*/
function productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1);

  // Step 1: left products
  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Step 2: right products
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

// Example usage:
const nums = [1, 2, 5, 4];
console.log(productExceptSelf(nums)); // Output: [24, 12, 8, 6]

