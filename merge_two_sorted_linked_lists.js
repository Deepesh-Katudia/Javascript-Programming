/*
Merge Two Sorted Linked Lists

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together
the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    current.next = list1 !== null ? list1 : list2;

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

function testMergeTwoLists(values1, values2, expected) {
    const list1 = createLinkedList(values1);
    const list2 = createLinkedList(values2);
    const mergedHead = mergeTwoLists(list1, list2);
    const output = linkedListToArray(mergedHead);
    const passed = JSON.stringify(output) === JSON.stringify(expected);

    console.log(
        `${passed ? "PASS" : "FAIL"} Input: [${values1}], [${values2}] Output: [${output}] Expected: [${expected}]`
    );
}

// Test cases
testMergeTwoLists([1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]);
testMergeTwoLists([], [], []);
testMergeTwoLists([], [0], [0]);
testMergeTwoLists([1, 3, 5], [2, 4, 6], [1, 2, 3, 4, 5, 6]);
testMergeTwoLists([-10, -3, 0], [-4, 2], [-10, -4, -3, 0, 2]);
