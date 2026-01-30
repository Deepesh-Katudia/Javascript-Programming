/*
📌 Problem: Intersection of Two Arrays
Problem Statement

Given two integer arrays, return an array of their common elements.

Each element in the result should be unique.

Example
nums1 = [1, 2, 2, 1]
nums2 = [2, 2]

Output: [2]
*/
function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const result = new Set();

  for (let num of nums2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
}
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
