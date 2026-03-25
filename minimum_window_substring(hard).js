/*
Minimum Window Substring

Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".
You may assume that the correct output is always unique.

Example 1:
Input: s = "OUZODYXAZV", t = "XYZ"
Output: "YXAZ"
Explanation: "YXAZ" is the shortest substring that includes "X", "Y", and "Z" from string t.

Example 2:
Input: s = "xyz", t = "xyz"
Output: "xyz"

Example 3:
Input: s = "x", t = "xy"
Output: ""

Constraints:
1 <= s.length <= 1000
1 <= t.length <= 1000
s and t consist of uppercase and lowercase English letters.
*/

function minWindow(s, t) {
    if (t.length > s.length) return "";

    const need = new Map();
    const window = new Map();

    for (let char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    let have = 0;
    const needCount = need.size;

    let left = 0;
    let minLen = Infinity;
    let resultStart = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        window.set(char, (window.get(char) || 0) + 1);

        if (need.has(char) && window.get(char) === need.get(char)) {
            have++;
        }
        while (have === needCount) {
            const windowLen = right - left + 1;

            if (windowLen < minLen) {
                minLen = windowLen;
                resultStart = left;
            }

            const leftChar = s[left];
            window.set(leftChar, window.get(leftChar) - 1);

            if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) {
                have--;
            }

            left++;
        }
    }
    return minLen === Infinity ? "" : s.slice(resultStart, resultStart + minLen);
}

