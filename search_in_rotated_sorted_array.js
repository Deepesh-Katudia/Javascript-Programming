/*
Search in Rotated Sorted Array

You are given:

a sorted array that was originally in ascending order
then rotated some number of times
all elements are unique
a target value

Return the index of target if it exists.
Otherwise return:
-1
You must solve it in:
O(log n)

Example 1
nums = [3,4,5,6,1,2]
target = 1
Output:
4
Because 1 is at index 4.

Example 2
nums = [3,5,6,0,1,2]
target = 4
Output:
-1
Because 4 does not exist in the array.
*/

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}


// Test cases
console.log(search([3,4,5,6,1,2], 1)); // Output: 4
console.log(search([3,5,6,0,1,2], 4)); // Output: -1

