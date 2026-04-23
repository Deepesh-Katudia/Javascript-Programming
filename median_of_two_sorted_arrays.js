/*
Time Based Key-Value Store

Implement a time-based key-value data structure that supports:

Storing multiple values for the same key at specified time stamps
Retrieving the key's value at a specified timestamp
Implement the TimeMap class:

TimeMap() Initializes the object.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns the most recent value of key if set was previously called on it and the most recent timestamp for that key prev_timestamp is less than or equal to the given timestamp (prev_timestamp <= timestamp). If there are no values, it returns "".
Note: For all calls to set, the timestamps are in strictly increasing order.

Example 1:

Input:
["TimeMap", "set", ["alice", "happy", 1], "get", ["alice", 1], "get", ["alice", 2], "set", ["alice", "sad", 3], "get", ["alice", 3]]

Output:
[null, null, "happy", "happy", null, "sad"]

Explanation:
TimeMap timeMap = new TimeMap();
timeMap.set("alice", "happy", 1);  // store the key "alice" and value "happy" along with timestamp = 1.
timeMap.get("alice", 1);           // return "happy"
timeMap.get("alice", 2);           // return "happy", there is no value stored for timestamp 2, thus we return the value at timestamp 1.
timeMap.set("alice", "sad", 3);    // store the key "alice" and value "sad" along with timestamp = 3.
timeMap.get("alice", 3);           // return "sad"
Constraints:

1 <= key.length, value.length <= 100
key and value only include lowercase English letters and digits.
1 <= timestamp <= 1000
*/

class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const m = nums1.length;
        const n = nums2.length;
        const left = Math.floor((m + n + 1) / 2);
        const right = Math.floor((m + n + 2) / 2);

        return (
            (this.getKth(nums1, m, nums2, n, left) +
                this.getKth(nums1, m, nums2, n, right)) /
            2.0
        );
    }

    /**
     * @param {number[]} a
     * @param {number} m
     * @param {number[]} b
     * @param {number} n
     * @param {number} k
     * @param {number} aStart
     * @param {number} bStart
     * @return {number}
     */
    getKth(a, m, b, n, k, aStart = 0, bStart = 0) {
        if (m > n) {
            return this.getKth(b, n, a, m, k, bStart, aStart);
        }
        if (m === 0) {
            return b[bStart + k - 1];
        }
        if (k === 1) {
            return Math.min(a[aStart], b[bStart]);
        }

        const i = Math.min(m, Math.floor(k / 2));
        const j = Math.min(n, Math.floor(k / 2));

        if (a[aStart + i - 1] > b[bStart + j - 1]) {
            return this.getKth(a, m, b, n - j, k - j, aStart, bStart + j);
        } else {
            return this.getKth(a, m - i, b, n, k - i, aStart + i, bStart);
        }
    }
}

// Test Cases 
const solution = new Solution();
console.log(solution.findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(solution.findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
