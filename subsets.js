/*
78. Subsets
Medium
Topics
premium lock icon
Companies
Given an integer array nums of unique elements, return all possible subsets
(the power set).

The solution set must not contain duplicate subsets. Return the solution in any
order.



Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]


Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

var subsets = function(nums) {
    const result = [];
    const current = [];

    // Backtracking template: choose -> explore -> un-choose.
    // `start` is the key to avoiding duplicates: once we move past an index we
    // never look back, so [1,2] gets built but [2,1] never does.
    const backtrack = (start) => {
        // Unlike most backtracking problems, every node of the decision tree is
        // itself a valid answer, so record here instead of only at the leaves.
        // The spread is required - `current` keeps mutating underneath us.
        result.push([...current]);

        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);   // choose nums[i]
            backtrack(i + 1);        // explore using only what comes after it
            current.pop();           // un-choose, restoring state for the next branch
        }
    };

    backtrack(0);
    return result;
};

// Time: O(n * 2^n) - 2^n subsets, and copying each one costs up to O(n).
// Space: O(n) for the recursion stack and `current`, excluding the output itself.
