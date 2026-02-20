/*
Longest Consecutive Sequence (Medium)

This one looks tricky, but the solution is elegant.

Problem
Given an unsorted array of integers, return the length of the longest consecutive elements sequence.

Your algorithm must run in O(n) time.

Example 1
nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest sequence is [1,2,3,4]
Example 2
nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/
function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    // Only start if num is beginning of sequence
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}
// test cases 
console.log(longestConsecutive(nums = [100,4,200,1,3,2])); // Output: 4
console.log(longestConsecutive(nums = [0,3,7,2,5,8,4,6,0,1])); // Output: 9

