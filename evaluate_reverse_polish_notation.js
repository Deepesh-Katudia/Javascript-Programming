/* 
Evaluate Reverse Polish Notation

You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.
Return the integer that represents the evaluation of the expression.

The operands may be integers or the results of other operations.
The operators include '+', '-', '*', and '/'.
Assume that division between integers always truncates toward zero.

Example 1:

Input: tokens = ["1","2","+","3","*","4","-"]
Output: 5
Explanation: ((1 + 2) * 3) - 4 = 5

Constraints:
1 <= tokens.length <= 1000.
tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100].
*/ 

function evalRPN(tokens) {
    const stack = [];

    for (let token of tokens) {
        if (token === "+" || token === "-" || token === "*" || token === "/") {
            const b = stack.pop();
            const a = stack.pop();

            let result;

            if (token === "+") {
                result = a + b;
            } else if (token === "-") {
                result = a - b;
            } else if (token === "*") {
                result = a * b;
            } else {
                result = Math.trunc(a / b);
            }

            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
}

// Example test case
const tokens = ["1","2","+","3","*","4","-"];
console.log(evalRPN(tokens)); // Output: 5