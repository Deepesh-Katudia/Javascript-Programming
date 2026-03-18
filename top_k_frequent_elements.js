/*
Top K Frequent Elements

Topics

Given an integer array nums and an integer k, return the k most frequent elements within the array.
The test cases are generated such that the answer is always unique.
You may return the output in any order.

Example 1:
Input: nums = [1,2,2,3,3,3], k = 2
Output: [2,3]

Example 2:
Input: nums = [7,7], k = 1
Output: [7]

Constraints:
1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.
*/

function topKFrequent(nums, k) {
    const freqMap = new Map();

    // Step 1: count frequencies
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    // Step 2: convert map to array and sort by frequency
    const sorted = Array.from(freqMap.entries()).sort((a, b) => b[1] - a[1]);
    // Step 3: take first k elements
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(sorted[i][0]);
    }
    return result;
}

// Test cases
console.log(topKFrequent([1,2,2,3,3,3], 2)); // [2,3]
console.log(topKFrequent([7,7], 1)); // [7]
