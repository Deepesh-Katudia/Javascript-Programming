/*
📌 Problem 2: Reverse an Array In-Place
Problem Statement
Given an array, reverse it in-place.

Constraints
Do not use an extra array
Use two pointers

Example
Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]

Approach (Interview Thinking)

Use two pointers:
One at the start
One at the end
Swap elements
Move pointers inward

This avoids extra memory.
*/
function reverseArray(arr){
    let left = 0;
    let right= arr.length - 1;

    while(left<right){
        let temp=arr[left];
        arr[left]=arr[right];
        arr[right]=temp;

        left++;
        right--;
    }
     return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5,18,20, 9, 8]))