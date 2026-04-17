/* 
Problem: Remove K Digits
Problem

You are given:

a string num representing a non-negative integer
an integer k

You must remove exactly k digits from the number so that the resulting number is the smallest possible.

Return the result as a string.

Example 1
num = "1432219"
k = 3

Output:

"1219"
Example 2
num = "10200"
k = 1

Output:

"200"
Example 3
num = "10"
k = 2

Output:

"0"
*/
function removeKdigits(num, k) {
    const stack = [];

    for (let digit of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // If still need to remove digits, remove from end
    while (k > 0) {
        stack.pop();
        k--;
    }

    // Build result
    let result = stack.join('');
    // Remove leading zeros
    result = result.replace(/^0+/, '');
    return result === '' ? '0' : result;
}

// Test cases
console.log(removeKdigits("1432219", 3)); // Output: "1219"
console.log(removeKdigits("10200", 1)); // Output: "200"

