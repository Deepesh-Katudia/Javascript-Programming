/*
Problem: Binary Search

You are given:
a sorted array nums
an integer target
Return the index of target if it exists in the array.
Otherwise, return -1.
You must solve it in O(log n) time.

Example 1
nums = [-1,0,3,5,9,12], target = 9
Output:
4
Because 9 is at index 4.

Example 2
nums = [-1,0,3,5,9,12], target = 2
Output:
-1
Because 2 does not exist in the array.
*/

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Output: 4
console.log(search([-1,0,3,5,9,12], 2)); // Output: -1
