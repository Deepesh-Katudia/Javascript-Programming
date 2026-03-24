/*
Permutation in String

You are given two strings s1 and s2.
Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.
Both strings only contain lowercase letters.

Example 1:
Input: s1 = "abc", s2 = "lecabee"
Output: true
Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

Example 2:
Input: s1 = "abc", s2 = "lecaabee"
Output: false

Constraints:
1 <= s1.length, s2.length <= 1000
*/

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const need = new Map();
    const window = new Map();

    // build frequency map for s1
    for (let char of s1) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let left = 0;

    for (let right = 0; right < s2.length; right++) {
        const char = s2[right];

        // add current char to window
        window.set(char, (window.get(char) || 0) + 1);

        // keep window size equal to s1.length
        if (right - left + 1 > s1.length) {
            const leftChar = s2[left];
            window.set(leftChar, window.get(leftChar) - 1);

            if (window.get(leftChar) === 0) {
                window.delete(leftChar);
            }

            left++;
        }

        // compare maps
        if (right - left + 1 === s1.length && isSameMap(need, window)) {
            return true;
        }
    }

    return false;
}

function isSameMap(map1, map2) {
    if (map1.size !== map2.size) return false;

    for (let [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }

    return true;
}

s1 = "abcd";
s2 = "lecabeee";
console.log(checkInclusion(s1,s2));





