/*
Minimum Window Substring (Hard but very common)

This problem tests:
Sliding window control
Frequency maps
When to expand vs shrink
Careful logic

Problem
Given two strings s and t, return the minimum window substring of s such that every character in t is included.

If no such substring exists, return "".

Example 1
s = "ADOBECODEBANC"
t = "ABC"

Output: "BANC"

Explanation:
The smallest substring containing A, B, C is "BANC".
*/

function minWindow(s, t) {
  if (t.length > s.length) return "";

  const need = new Map();
  for (let ch of t) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }

  let left = 0;
  let matched = 0;
  let minLen = Infinity;
  let start = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    if (need.has(ch)) {
      need.set(ch, need.get(ch) - 1);
      if (need.get(ch) === 0) matched++;
    }

    while (matched === need.size) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        start = left;
      }

      const leftChar = s[left];
      if (need.has(leftChar)) {
        if (need.get(leftChar) === 0) matched--;
        need.set(leftChar, need.get(leftChar) + 1);
      }

      left++;
    }
  }

  return minLen === Infinity ? "" : s.substring(start, start + minLen);
}
// test cases
console.log(minWindow(s = "ADOBECODEBANC", t = "ABC")); // Output: "BANC"
console.log(minWindow(s = "abcvduada", t = "ab"));
console.log(minWindow(s = "a", t = "aa"));
// Output: ""