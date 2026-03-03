/*

Problem: Move Zeroes 

Given an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.

You must do this in-place without making a copy of the array.

Example 1
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2
Input: nums = [0]
Output: [0]

Constraints
1 <= nums.length <= 10^4
-2^31 <= nums[i] <= 2^31 - 1

Pattern: Two Pointers (slow-fast)
Intuition
fast pointer scans every number
slow pointer marks the position where the next non-zero should go
*/

function moveZeroes(nums){
    let slow = 0;

    for(let fast = 0; fast<nums.length; fast++){
        if(nums[fast]!==0){
            nums[slow] = nums[fast];
            slow++; // length of slow is [3]
        }
    }

    while(slow<nums.length){
        nums[slow]=0;
        slow++;
    }
    return nums;
}

// Test cases
console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]