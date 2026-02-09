/*
Majority Element

Problem
Find element appearing more than n/2 times.
*/

function majorityElement(nums) {
  const map = new Map();
  const limit = Math.floor(nums.length / 2);

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > limit) {
      return num;
    }
  }
}

// Example usage:
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([1])); // Output: 1