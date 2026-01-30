/*
Problem: Subarray Sum Equals K
Problem Statement

Given an array of integers nums and an integer k, return the number of subarrays whose sum equals k.

A subarray is a continuous part of the array.

Example
nums = [1, 1, 1], k = 2
Output: 2
Explanation: [1,1] (index 0-1) and [1,1] (index 1-2)


Another example:

nums = [1, 2, 3], k = 3
Output: 2
Subarrays: [1,2], [3]
*/
function subarraySum(nums,k){
    const map = new Map();
    map.set(0,1); // Initialize with sum 0 occurring once
    let count = 0;
    let currentSum = 0;

    for(let num of nums){
        currentSum += num;
        if(map.has(currentSum - k)){
            count += map.get(currentSum - k);
        }
        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }
    return count;
}

console.log(subarraySum([1,1,1],2)); // Output: 2
console.log(subarraySum([1,2,3],3)); // Output: 2
console.log(subarraySum([1,2,1,2,1],3)); // Output: 4