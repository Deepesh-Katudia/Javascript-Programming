/*
Problem 1: Two Sum

Problem Statement:
Given an array of integers and a target, return the indices of two numbers that add up to the target.

Example:

nums = [2, 7, 11, 15], target = 9
Output: [0, 1]

Approach (Think Before Code)

Create a map
Loop through array
For each number:
    Compute complement = target - current
    Check if complement exists in map
If yes → return indices
Else → store current number in map
*/

function TwoSum(nums, target) {
    const nummap = new Map();

    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i];

        if(nummap.has(complement)){
            return [nummap.get(complement), i];
        }
        nummap.set(nums[i], i);
    }
}

console.log(TwoSum([2, 7, 11, 15], 20)); // [0, 1]
console.log(TwoSum([3, 2, 4], 6));