/*
Longest Repeating Character Replacement (Medium)
This one builds:
Sliding window mastery
Frequency map usage
Window optimization logic

Problem
You are given a string s and an integer k.
You can replace at most k characters in the string.
Return the length of the longest substring containing the same letter after at most k replacements.

Example 1
s = "ABAB", k = 2
Output: 4
Explanation: Replace two A's with B's or vice versa.

Example 2
s = "AABABBA", k = 1
Output: 4
Explanation: Replace one 'A' with 'B' → "AABBBBA"
Longest substring = 4
*/

function characterReplacement(s, k) {
  const freq = new Map();
  let left = 0;
  let maxFreq = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    freq.set(ch, (freq.get(ch) || 0) + 1);

    maxFreq = Math.max(maxFreq, freq.get(ch));

    while ((right - left + 1) - maxFreq > k) {
      freq.set(s[left], freq.get(s[left]) - 1);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// Test cases
console.log(characterReplacement("ABAB", 2)); // Output: 4
console.log(characterReplacement("AABABBA", 1)); // Output: 4
