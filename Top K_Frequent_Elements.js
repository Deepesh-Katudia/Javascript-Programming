/*
Problem: Top K Frequent Elements
Problem Statement
Given an integer array nums and an integer k, return the k most frequent elements.

Example
nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Another:
nums = [1], k = 1
Output: [1]
*/

function topKFrequent(nums, k) {
  const map = new Map();

  // Step 1: Count frequency
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Step 2: Convert map to array and sort
  const sorted = Array.from(map.entries())
    .sort((a, b) => b[1] - a[1]);

  // Step 3: Take first k elements
  return sorted.slice(0, k).map(entry => entry[0]);
}

// Test Cases
console.log(topKFrequent([1,1,1,2,2,3], 2)); // Output: [1, 2]
console.log(topKFrequent([1], 1)); // Output: [1]
