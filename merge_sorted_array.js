/*
Merge Sorted Array 
Pattern: Two pointers from the end
This is a very good interview problem because the trick is not obvious at first.

Problem
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of valid elements in nums1 and nums2. Merge nums2 into nums1 as one sorted array.The final sorted array should be stored inside nums1.

nums1 has length m + n, where:
first m elements are valid
last n elements are 0 placeholders

Example 1
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Example 2
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Example 3
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]

Constraints
nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
-10^9 <= nums1[i], nums2[i] <= 10^9
*/

function merge(nums1, m, nums2, n) {
    let i = m - 1;          
    let j = n - 1;          
    let k = m + n - 1;      

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

// Test cases
let nums1 = [1,2,3,0,0,0];
merge(nums1, 3, [2,5,6], 3);
console.log(nums1);

nums1 = [1];
merge(nums1, 1, [], 0);
console.log(nums1);

nums1 = [0];
merge(nums1, 0, [1], 1);
console.log(nums1);