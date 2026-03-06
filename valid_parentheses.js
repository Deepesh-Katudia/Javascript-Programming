/*
Valid Parentheses

Problem
Given a string s containing just the characters:
'(', ')'
'{', '}'
'[', ']'

Return true if the input string is valid, and false otherwise.
A string is valid if:
Open brackets are closed by the same type of brackets
Open brackets are closed in the correct order
Every closing bracket has a corresponding opening bracket

Example 1
Input: s = "()"
Output: true
Example 2
Input: s = "()[]{}"
Output: true
Example 3
Input: s = "(]"
Output: false
Example 4
Input: s = "([)]"
Output: false
Example 5
Input: s = "{[]}"
Output: true

Constraints
1 <= s.length <= 10^4
s consists of parentheses only: '()[]{}'
*/

function isValid(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else {
      const top = stack.pop();
      if (top !== map[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false