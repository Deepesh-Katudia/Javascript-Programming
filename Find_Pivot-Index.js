/*
Problem: Find Pivot Index (Classic Prefix Application)

Problem Statement
Return the pivot index where:
sum of left side == sum of right side

Example:
[1,7,3,6,5,6] → 3
*/

function pivotIndex(nums) {
  let total = 0;
  for (let num of nums) total += num;

  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - leftSum - nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // Output: 3
console.log(pivotIndex([1, 2, 3])); // Output: -1
console.log(pivotIndex([2, 1, -1])); // Output: 0