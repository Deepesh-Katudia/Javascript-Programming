/*
Linked List Cycle Detection

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached
again by continuously following the next pointer.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node.

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Constraints:
The number of nodes in the list is in the range [0, 10000].
-100000 <= Node.val <= 100000
pos is -1 or a valid index in the linked-list.
*/

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

function createLinkedList(values, pos = -1) {
    let dummy = new ListNode(0);
    let current = dummy;
    let cycleNode = null;

    for (let i = 0; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;

        if (i === pos) {
            cycleNode = current;
        }
    }

    if (pos !== -1 && current !== dummy) {
        current.next = cycleNode;
    }

    return dummy.next;
}

function testHasCycle(values, pos, expected) {
    const head = createLinkedList(values, pos);
    const output = hasCycle(head);
    const passed = output === expected;

    console.log(
        `${passed ? "PASS" : "FAIL"} Input: [${values}], pos = ${pos} Output: ${output} Expected: ${expected}`
    );
}

// Test cases
testHasCycle([3, 2, 0, -4], 1, true);
testHasCycle([1, 2], 0, true);
testHasCycle([1], -1, false);
testHasCycle([], -1, false);
testHasCycle([1, 2, 3, 4], -1, false);
testHasCycle([1], 0, true);
