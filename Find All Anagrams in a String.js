/*
Find All Anagrams in a String 

Pattern: Hash map + Sliding Window
This one trains you to manage a window with counts, which is exactly what many interview problems require.

Problem
Given two strings s and p, return all start indices of p’s anagrams in s.

Example
s = "cbaebabacd", p = "abc"
Output: [0, 6]
// "cba" is an anagram of "abc"
// "bac" is an anagram of "abc"


Another:

s = "abab", p = "ab"
Output: [0, 1, 2]
*/

function findAnagrams(s, p) {
  const result = [];
  if (p.length > s.length) return result;

  const need = new Map();
  for (const ch of p) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }

  let left = 0;
  let matched = 0; 

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    // add right char into window
    if (need.has(ch)) {
      need.set(ch, need.get(ch) - 1);
      if (need.get(ch) === 0) matched++;
    }

    // keep window size == p.length
    if (right - left + 1 > p.length) {
      const leftChar = s[left];
      if (need.has(leftChar)) {
        if (need.get(leftChar) === 0) matched--;
        need.set(leftChar, need.get(leftChar) + 1);
      }
      left++;
    }

    // if all required chars are matched, record start index
    if (matched === need.size && right - left + 1 === p.length) {
      result.push(left);
    }
  }

  return result;
}

// Test cases
console.log(findAnagrams(s ="addabcwgbcasef", p ="abc"));


