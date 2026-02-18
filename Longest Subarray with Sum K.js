/*
Longest Subarray with Sum K
This one forces you to understand:
Prefix sums
What to store in the map
Why sometimes we store index, not frequency

📌 Problem
Given an integer array nums and an integer k, return the length of the longest subarray whose sum equals k.

Example 1
nums = [1, -1, 5, -2, 3], k = 3
Output: 4
Explanation: [1, -1, 5, -2] has sum = 3

Example 2
nums = [-2, -1, 2, 1], k = 1
Output: 2
Explanation: [-1, 2]
*/
function longestSubarraySumK(nums, k) {
  const map = new Map(); // prefixSum -> first index
  let prefixSum = 0;
  let maxLen = 0;

  map.set(0, -1); 

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }

    const needed = prefixSum - k;

    if (map.has(needed)) {
      const length = i - map.get(needed);
      maxLen = Math.max(maxLen, length);
    }
  }

  return maxLen;
}

// Test cases
console.log(longestSubarraySumK([1, -1, 5, -2, 3], 3)); // Output: 4
console.log(longestSubarraySumK([-2, -1, 2, 1], 1)); // Output: 2

