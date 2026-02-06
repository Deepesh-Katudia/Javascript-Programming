/*
PREFIX SUM PROBLEMS
Running Sum of 1D Array (Easy)

Problem
Given an array, return the running sum.

Example

[1,2,3,4] → [1,3,6,10]
*/

function runningSum(nums) {
  const result = [];
  let sum = 0;

  for (let num of nums) {
    sum += num;
    result.push(sum);
  }

  return result;
}

console.log(runningSum([1, 2, 3, 4])); // Output: [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1])); // Output: [1, 2, 3, 4, 5]
console.log(runningSum([3, 1, 4, 2])); // Output: [3, 4, 8, 10]