/*
Group Anagrams

Problem
Group strings that are anagrams.

Why it matters

Hashing + transformation

Hashing + transformation
Common medium question
Pattern
Sort string or count chars
Use as map key
*/

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    // Step 1: Create key
    const key = str.split('').sort().join('');

    // Step 2: If key not present, initialize
    if (!map.has(key)) {
      map.set(key, []);
    }

    // Step 3: Push original string
    map.get(key).push(str);
  }

  // Step 4: Return grouped values
  return Array.from(map.values());
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));