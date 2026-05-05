/*
Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]

Constraints:
The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
*/

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function middleNode(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
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

function testMiddleNode(values, expected) {
    const head = createLinkedList(values);
    const middleHead = middleNode(head);
    const output = linkedListToArray(middleHead);
    const passed = JSON.stringify(output) === JSON.stringify(expected);

    console.log(
        `${passed ? "PASS" : "FAIL"} Input: [${values}] Output: [${output}] Expected: [${expected}]`
    );
}

// Test cases
testMiddleNode([1, 2, 3, 4, 5], [3, 4, 5]);
testMiddleNode([1, 2, 3, 4, 5, 6], [4, 5, 6]);
testMiddleNode([1], [1]);
testMiddleNode([1, 2], [2]);
