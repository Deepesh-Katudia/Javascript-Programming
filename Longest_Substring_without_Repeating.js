/*
Problem: Longest Substring Without Repeating Characters

Problem Statement: Given a string s, return the length of the longest substring without repeating characters.

Examples
"abcabcbb" → 3   // "abc"
"bbbbb"    → 1   // "b"
"pwwkew"   → 3   // "wke"
""         → 0
*/

function lengthOfLongestSubstring(s) {
  const lastSeen = new Map(); // char -> last index
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
      left = lastSeen.get(ch) + 1;
    }

    lastSeen.set(ch, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));