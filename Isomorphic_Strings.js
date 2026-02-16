/*
Isomorphic Strings (Medium)
Problem
Given two strings s and t, return true if they are isomorphic.
Two strings are isomorphic if characters in s can be replaced to get t with rules:
Each character in s maps to exactly one character in t
No two different characters in s can map to the same character in t
Order must stay the same

Examples
s = "egg", t = "add" → true (e→a, g→d)
s = "foo", t = "bar" → false (o would need to map to two letters)
s = "ab", t = "aa" → false (a and b both mapping to a is not allowed)

Key Concept (Very important)
You need to ensure mapping works in both directions.
So we use two maps:
mapST: sChar → tChar
mapTS: tChar → sChar
This prevents collisions like:
s: a -> a
s: b -> a (invalid, because a is already taken)
*/

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    const b = t[i];

    // Check s -> t consistency
    if (mapST.has(a) && mapST.get(a) !== b) return false;

    // Check t -> s consistency
    if (mapTS.has(b) && mapTS.get(b) !== a) return false;

    // Record the mapping in both directions
    mapST.set(a, b);
    mapTS.set(b, a);
  }

  return true;
}

// Test Cases
console.log(isIsomorphic("egg", "add")); // Output: true
console.log(isIsomorphic("foo", "bar")); // Output: false
console.log(isIsomorphic("ab", "aa")); // Output: false

/*
Time Complexity: O(n) where n is the length of the strings (we traverse them once)
Space Complexity: O(1) because the maps can only have at most 256 entries (ASCII characters)
This is a common pattern for problems involving character mappings:
1. Use two maps to ensure one-to-one mapping in both directions.
2. Check for consistency at each step.
*/
