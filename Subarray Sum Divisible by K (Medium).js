/*
Subarray Sum Divisible by K (Medium)

Problem
Return number of subarrays whose sum is divisible by k.

Key Idea
Use prefix sum modulo k.
*/

function subarraysDivByK(nums, k) {
  const map = new Map();
  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (let num of nums) {
    sum += num;
    let mod = sum % k;
    if (mod < 0) mod += k;

    if (map.has(mod)) {
      count += map.get(mod);
    }

    map.set(mod, (map.get(mod) || 0) + 1);
  }

  return count;
}


