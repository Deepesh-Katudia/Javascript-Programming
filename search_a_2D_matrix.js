/*
Problem: Search a 2D Matrix

You are given:

an m x n integer matrix
an integer target
The matrix has 2 important properties:
each row is sorted in non-decreasing order
the first element of each row is greater than the last element of the previous row
Return true if target exists in the matrix, otherwise return false.

You must solve it in:

O(log(m * n))
Example 1
matrix = [
  [1,2,4,8],
  [10,11,12,13],
  [14,20,30,40]
]
target = 10

Output:
true
Because 10 exists in the matrix.

Example 2
matrix = [
  [1,2,4,8],
  [10,11,12,13],
  [14,20,30,40]
]
target = 15

Output:
false
Because 15 does not exist in the matrix.
*/

function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const row = Math.floor(mid / n);
        const col = mid % n;
        const value = matrix[row][col];

        if (value === target) {
            return true;
        } else if (value < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

// Test cases
console.log(searchMatrix([
    [1,2,4,8],
    [10,11,12,13],
    [14,20,30,40]
], 10)); // Output: true

console.log(searchMatrix([
    [1,2,4,8],
    [10,11,12,13],
    [14,20,30,40]
], 15)); // Output: false

