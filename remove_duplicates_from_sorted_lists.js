/*
83. Remove Duplicates from Sorted List

You are given a sorted linked list.
You need to remove duplicate values and keep only one copy of each value.

Example 1
Input:
1 -> 1 -> 2 -> null

Output:
1 -> 2 -> null
Because 1 appeared two times, we keep only one 1.

Example 2
Input:
1 -> 1 -> 2 -> 3 -> 3 -> null

Output:
1 -> 2 -> 3 -> null
Because duplicates are removed.
*/

function deleteDuplicates(head) {
    let current = head;

    while(current !== null && current.next !== null) {
        if(current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}
