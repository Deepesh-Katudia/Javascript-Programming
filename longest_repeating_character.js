/*
Longest Repeating Character Replacement

You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character. After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

Example 1:
Input: s = "XYYX", k = 2

Output: 4
Explanation: Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

Example 2:
Input: s = "AAABABB", k = 1

Output: 5

Constraints:
1 <= s.length <= 1000
0 <= k <= s.length
*/

function characterReplacement(s, k) {
    const count = new Map();
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        count.set(char, (count.get(char) || 0) + 1);
        maxFreq = Math.max(maxFreq, count.get(char));

        while ((right - left + 1) - maxFreq > k) {
            count.set(s[left], count.get(s[left]) - 1);
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

// Example usage:
const s1 = "XYYX";
const k1 = 1;
console.log(characterReplacement(s1, k1)); // Output: 4

const s2 = "AAABABBBBBBA";
const k2 = 1;
console.log(characterReplacement(s2, k2)); // Output: 5
