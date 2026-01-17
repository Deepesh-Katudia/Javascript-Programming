/*
📌 Problem 1: Find the Maximum Element in an Array
Problem Statement
Given an array of integers, return the maximum element.
Constraints
Do not use Math.max
Use only one loop
Handle edge cases

Example
Input: [3, 1, 7, 2, 9, 4]
Output: 9

Approach (Interview Thinking)
Assume the first element is the maximum
Traverse the array Update max whenever a larger value is found
This avoids nested loops and keeps the solution optimal.
*/
function findMax(arr) {
    if(arr.length === 0) return null;

    let max = arr[0]; // Assume the first element is the maximum
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }

    }
    return max;
}

console.log(findMax([3, 10, 12, 25, 9, 28, 4 , 15]))