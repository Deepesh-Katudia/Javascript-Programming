/*
Problem : Range Sum Query (Easy, Fundamental)

Problem Statement
Given an array nums, and many queries (l, r), return the sum of elements between l and r inclusive.

Example:
nums = [2, 4, 6, 1]
query (1, 3) => 4 + 6 + 1 = 11
*/

function buildPrefixSum(nums) {
  const prefix = new Array(nums.length);
  let running = 0;

  for (let i = 0; i < nums.length; i++) {
    running += nums[i];
    prefix[i] = running;
  }

  return prefix;
}

function rangeSum(prefix, l, r) {
  if (l === 0) return prefix[r];
  return prefix[r] - prefix[l - 1];
}

const nums = [2, 4, 6, 1];
const prefix = buildPrefixSum(nums);
console.log(rangeSum(prefix, 1, 3)); // Output: 11
console.log(rangeSum(prefix, 0, 2)); // Output: 12
console.log(rangeSum(prefix, 2, 3)); // Output: 7
console.log(rangeSum(prefix, 0, 3)); // Output: 13
