/*
Remove All Adjacent Duplicates in String II
Problem

You are given:

a string s
an integer k

Remove groups of k adjacent identical characters from the string.

After removing one group, the string closes up, and this may create new groups that should also be removed.

Return the final string.

Example 1
s = "deeedbbcccbdaa"
k = 3

Output:
"aa"
Why?
Start:
deeedbbcccbdaa
Remove "eee":
ddbbcccbdaa
Remove "ccc":
ddbbbdaa
Remove "bbb":
dddaa
Remove "ddd":
aa
Final answer:
"aa"
*/

function removeDuplicates(s, k) {
    const stack = [];

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1][0] === char) {
            stack[stack.length - 1][1]++;

            if (stack[stack.length - 1][1] === k) {
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }
    let result = "";
    for (let [char, count] of stack) {
        result += char.repeat(count);
    }
    return result;
}


// Example usage:
console.log(removeDuplicates("deeedbbcccbdaa", 3)); // Output: "aa"
