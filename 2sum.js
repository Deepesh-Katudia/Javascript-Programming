/* 
Two Sum

Problem
Given an array of integers nums and an integer target, return the indices [i, j] such that:
nums[i] + nums[j] == target
i != j

You can assume:
exactly one valid answer exists
return the smaller index first

Example 1
nums = [3,4,5,6], target = 7
Output: [0,1]

Because:
nums[0] + nums[1] = 3 + 4 = 7

Example 2
nums = [4,5,6], target = 10
Output: [0,2]

Because:
4 + 6 = 10

Example 3
nums = [5,5], target = 10
Output: [0,1]
*/
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}

// Test cases
console.log(twoSum([3,4,5,6], 7)); // [0,1]
console.log(twoSum([4,5,6], 10)); // [0,2]
console.log(twoSum([5,5], 10)); // [0,1]
