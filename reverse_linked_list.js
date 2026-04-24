/*
Reverse Linked List

Given the head of a singly linked list, reverse the list and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is in the range [0, 5000].
-5000 <= Node.val <= 5000
*/

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function reverseList(head) {
    let previous = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next;
        current.next = previous;
        previous = current;
        current = nextNode;
    }

    return previous;
}

function createLinkedList(values) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let value of values) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
}

function linkedListToArray(head) {
    const result = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}

function testReverseList(values, expected) {
    const head = createLinkedList(values);
    const reversedHead = reverseList(head);
    const output = linkedListToArray(reversedHead);
    const passed = JSON.stringify(output) === JSON.stringify(expected);

    console.log(
        `${passed ? "PASS" : "FAIL"} Input: [${values}] Output: [${output}] Expected: [${expected}]`
    );
}

// Test cases
testReverseList([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
testReverseList([1, 2], [2, 1]);
testReverseList([1], [1]);
testReverseList([], []);
