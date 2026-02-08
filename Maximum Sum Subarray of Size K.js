/*
🔹 SLIDING WINDOW PROBLEMS
Maximum Sum Subarray of Size K

Problem
Find max sum of any subarray of size k.
*/

function maxSubarraySum(nums, k) {
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    windowSum += nums[i];

    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= nums[i - (k - 1)];
    }
  }

  return maxSum;
}

// Example usage:
console.log(maxSubarraySum([1, 2, 3, 4, 5], 2)); // Output: 9 (subarray [4, 5])
console.log(maxSubarraySum([1, 2, 3, 4, 5], 3)); // Output: 12 (subarray [3, 4, 5])
console.log(maxSubarraySum([1, 2, 3, 4, 5], 4)); // Output: 14 (subarray [2, 3, 4, 5])
console.log(maxSubarraySum([1, 2, 3, 4, 5], 5)); // Output: 15 (subarray [1, 2, 3, 4, 5])