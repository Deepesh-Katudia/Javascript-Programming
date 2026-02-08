/*
Minimum Size Subarray Sum (Medium)

Problem
Return minimum length of subarray with sum ≥ target.

*/

function minSubArrayLen(target, nums) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// Example usage:
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2 (subarray [4, 3])
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5])); // Output: 5 (subarray [1, 2, 3, 4, 5])
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5])); // Output: 3 (subarray [3, 4, 5])