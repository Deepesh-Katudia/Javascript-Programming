/*
Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list
and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]

Constraints:
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
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

function testRemoveNthFromEnd(values, n, expected) {
    const head = createLinkedList(values);
    const output = linkedListToArray(removeNthFromEnd(head, n));
    const passed = JSON.stringify(output) === JSON.stringify(expected);

    console.log(
        `${passed ? "PASS" : "FAIL"} Input: [${values}], n = ${n} Output: [${output}] Expected: [${expected}]`
    );
}

// Test cases
testRemoveNthFromEnd([1, 2, 3, 4, 5], 2, [1, 2, 3, 5]);
testRemoveNthFromEnd([1], 1, []);
testRemoveNthFromEnd([1, 2], 1, [1]);
testRemoveNthFromEnd([1, 2], 2, [2]);
testRemoveNthFromEnd([1, 2, 3], 3, [2, 3]);
testRemoveNthFromEnd([1, 2, 3], 1, [1, 2]);
