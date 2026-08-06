/*
39. Combination Sum
Medium
Topics
premium lock icon
Companies
Given an array of distinct integers candidates and a target integer target,
return a list of all unique combinations of candidates where the chosen numbers
sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two
combinations are unique if the frequency of at least one of the chosen numbers
is different.

The test cases are generated such that the number of unique combinations that
sum up to target is less than 150 combinations for the given input.



Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: []


Constraints:

1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40
*/

var combinationSum = function(candidates, target) {
    const result = [];
    const current = [];

    // Sorting is not required for correctness, but it lets us break out of the
    // loop early: once one candidate overshoots, every later one does too.
    candidates.sort((a, b) => a - b);

    // Same choose -> explore -> un-choose skeleton as Subsets, with one change
    // that does all the work: we recurse with `i` instead of `i + 1`, so the
    // current candidate stays available and can be reused without limit.
    // Still never revisiting indexes before `start` is what keeps [2,3] and
    // [3,2] from both appearing.
    const backtrack = (start, remaining) => {
        if (remaining === 0) {
            result.push([...current]); // spread - `current` keeps mutating
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Sorted, so nothing after this fits either.
            if (candidates[i] > remaining) break;

            current.push(candidates[i]);                  // choose
            backtrack(i, remaining - candidates[i]);      // explore, reusing i
            current.pop();                                // un-choose
        }
    };

    backtrack(0, target);
    return result;
};

// Time: O(n^(target/min)) - the recursion tree branches n ways and can go
// target/min levels deep before the remaining sum is exhausted; copying each
// valid combination adds another O(target/min).
// Space: O(target/min) for the recursion stack and `current`, excluding output.

console.log(combinationSum([2, 3, 6, 7], 7));  // [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8));     // [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1));           // []
