/*
8️⃣ Longest Consecutive Sequence (High ROI)

Problem
Find longest consecutive elements sequence.
*/

function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let streak = 1;

      while (set.has(current + 1)) {
        current++;
        streak++;
      }

      longest = Math.max(longest, streak);
    }
  }

  return longest;
}


// Test Cases
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([0, -1])); // Output: 2
console.log(longestConsecutive([1, 2, 0, 1])); // Output: 3
console.log(longestConsecutive([])); // Output: 0