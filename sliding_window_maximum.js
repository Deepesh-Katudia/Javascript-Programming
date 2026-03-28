/*
Sliding Window Maximum

Problem
You are given:
nums = [1,2,1,0,4,2,6]
k = 3

You must:

take a window of size k
move it from left → right
return the maximum of each window
Example

Window size = 3

[1 2 1] → max = 2
  [2 1 0] → max = 2
    [1 0 4] → max = 4
      [0 4 2] → max = 4
        [4 2 6] → max = 6

Output:
[2,2,4,4,6]
*/

function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // store indices
    let left = 0;

    for (let right = 0; right < nums.length; right++) {

        // 1. Remove smaller elements from back
        while (deque.length && nums[right] > nums[deque[deque.length - 1]]) {
            deque.pop();
        }

        // 2. Add current index
        deque.push(right);

        // 3. Remove elements outside window
        if (deque[0] < left) {
            deque.shift();
        }

        // 4. Window is ready
        if (right - left + 1 === k) {
            result.push(nums[deque[0]]);
            left++;
        }
    }
    return result;
}

// Example test case
console.log(maxSlidingWindow([1,2,1,0,4,2,6], 3)); // [2,2,4,4,6]

