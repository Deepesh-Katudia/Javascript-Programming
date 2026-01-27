/*
Problem: Contains Duplicate
Problem Statement

Given an integer array nums, return true if any value appears at least twice in the array.
Return false if every element is distinct.

Examples
[1, 2, 3, 1] → true
[1, 2, 3, 4] → false
[1, 1, 1, 3, 3, 4] → true
*/

function containsDuplicate(nums){
    const numSet = new Set();
    for(let i of nums){
        if(numSet.has(i)){
           return true;
        }
        numSet.add(i);
    }
    return false; 
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4])); // true