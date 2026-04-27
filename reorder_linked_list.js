/*
Reorder Linked List

You are given the head of a singly linked list.

The list can be represented as:
L0 -> L1 -> ... -> Ln - 1 -> Ln

Reorder the list to be:
L0 -> Ln -> L1 -> Ln - 1 -> L2 -> Ln - 2 -> ...

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

Constraints:
The number of nodes in the list is in the range [1, 50000].
1 <= Node.val <= 1000
*/

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function reorderList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = slow.next;
    slow.next = null;

    let previous = null;
    while (second !== null) {
        let nextNode = second.next;
        second.next = previous;
        previous = second;
        second = nextNode;
    }

    let first = head;
    second = previous;

    while (second !== null) {
        let firstNext = first.next;
        let secondNext = second.next;

        first.next = second;
        second.next = firstNext;

        first = firstNext;
        second = secondNext;
    }

    return head;
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

function testReorderList(values, expected) {
    const head = createLinkedList(values);
    const reorderedHead = reorderList(head);
    const output = linkedListToArray(reorderedHead);
    const passed = JSON.stringify(output) === JSON.stringify(expected);

    console.log(
        `${passed ? "PASS" : "FAIL"} Input: [${values}] Output: [${output}] Expected: [${expected}]`
    );
}

// Test cases
testReorderList([1, 2, 3, 4], [1, 4, 2, 3]);
testReorderList([1, 2, 3, 4, 5], [1, 5, 2, 4, 3]);
testReorderList([1, 2], [1, 2]);
testReorderList([1], [1]);
testReorderList([1, 2, 3, 4, 5, 6], [1, 6, 2, 5, 3, 4]);
