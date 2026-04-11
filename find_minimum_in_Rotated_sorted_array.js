/*
Find Minimum in Rotated Sorted Array
You are given an array nums:
originally sorted in ascending order
then rotated some number of times
all elements are unique

Return the minimum element in the array.

You must solve it in:
O(log n)

Example 1
nums = [3,4,5,6,1,2]
Output:
1

Example 2
nums = [4,5,0,1,2,3]
Output:
0

Example 3
nums = [4,5,6,7]
Output:
4nd the minimum element in a rotated sorted array.
*/

function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
}

// Test cases
console.log(findMin([3, 4, 5, 6, 1, 2])); // Output: 1
console.log(findMin([4, 5, 0, 1, 2, 3])); // Output: 0
console.log(findMin([4, 5, 6, 7])); // Output: 4