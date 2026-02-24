/*
3Sum (Medium)

Pattern: Sorting + Two Pointers + Duplicate handling
This is one of the most common medium problems in US interviews.

Problem
Given an integer array nums, return all unique triplets [nums[i], 
nums[j], nums[k]] such that:
i != j != k
nums[i] + nums[j] + nums[k] === 0
Return the triplets without duplicates.

Example
nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate fixed elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        // Skip duplicates for left pointer
        while (left < right && nums[left] === nums[left - 1]) left++;

        // Skip duplicates for right pointer
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// Example usage:
const nums = [-1, 0, 1, 2, -2, -4];
console.log(threeSum(nums)); // Output: [[-1, -1, 2], [-1, 0, 1]]
