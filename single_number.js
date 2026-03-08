/*
Single Number 
Pattern: Bit Manipulation (XOR)

📌 Problem
Given a non-empty array of integers nums, every element appears twice except for one element.Find the element that appears only once.You must implement a solution with:

Linear runtime O(n)
Constant extra space O(1)

Example 1
Input: nums = [2,2,1]
Output: 1

Example 2
Input: nums = [4,1,2,1,2]
Output: 4

Example 3
Input: nums = [1]
Output: 1

Constraints
1 <= nums.length <= 3 * 10^4
-3 * 10^4 <= nums[i] <= 3 * 10^4
Each element appears twice except for one.
*/

function singleNumber(nums){
    let result =0;

    for(let num of nums){
        result ^= num;;
    }
    return result;
}

// Test cases
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1