/*
Remove Element 

Pattern: Two Pointers
Move Zeroes
Remove Duplicates
In-place array modification

Problem
Given an integer array nums and an integer val, remove all occurrences of val in-place.The order of the elements may be changed.Then return the number of elements in nums which are not equal to val.The first k elements of nums should contain the elements not equal to val.

Example 1
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]

Explanation:
Your function should return k = 2, with the first two elements being 2.

Example 2
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,3,0,4,_,_,_]

Explanation:
Your function should return k = 5, with the first five elements containing values not equal to 2.

Constraints

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
*/

function removeElement(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

// Test cases
console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));