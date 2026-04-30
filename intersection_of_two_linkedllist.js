/*
Problem: 160. Intersection of Two Linked Lists

You are given the heads of two singly linked lists:
headA
headB

Return the node where the two linked lists intersect.
If the two linked lists do not intersect, return:

null

Important: intersection means the two lists share the same node reference, not just the same value.

Example
List A: 4 → 1 → 8 → 4 → 5
List B: 5 → 6 → 1 → 8 → 4 → 5

The intersection starts at node:
8
Because both lists share the exact same node from 8 → 4 → 5.
*/

var getIntersectionNode = function(headA, headB) {
     let pA = headA;
    let pB = headB;

    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};