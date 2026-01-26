/*
Problem : First Non-Repeating Character
Problem Statement
Given a string, return the first character that does not repeat.
Return -1 if none exists.

Example:
"s = 'leetcode'" → 'l'
"s = 'aabb'" → -1

Approach

Count character frequency using map
Loop string again
Return first char with count 1
*/

function firstUniqueChar(s) {
  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of s) {
    if (map.get(char) === 1) {
      return char;
    }
  }

  return -1;
}

console.log(firstUniqueChar("leetcode")); // 'l'
console.log(firstUniqueChar("aabb")); // -1