/* 
LeetCode-Style Problem: Valid Anagram
Problem

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once.

Examples
Example 1
Input: s = "anagram", t = "nagaram"
Output: true
Example 2
Input: s = "rat", t = "car"
Output: false

Constraints
1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters

Notes:
We should aim for O(n) time.
Avoid sorting if possible, because sorting costs O(n log n).
*/

function isAnagram(s,t){
  if (s.length !== t.length) return false;

  const count = new Map();
  for (const ch of s) count.set(ch, (count.get(ch) || 0) + 1);

  for (const ch of t) {
    if (!count.has(ch)) return false;
    count.set(ch, count.get(ch) - 1);
    if (count.get(ch) === 0) count.delete(ch);
  }

  return count.size === 0;
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
