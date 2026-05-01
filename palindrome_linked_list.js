/*
Problem: 234. Palindrome Linked List

You are given the head of a singly linked list.

Return:
true

if the linked list is a palindrome.
Otherwise return:
false

A palindrome means it reads the same forward and backward.
*/

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    }

    let prev = null;
    let curr = slow;

    while(curr !== null ) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    let left = head;
    let right = prev;

    while(right !== null) {
        if(left.val !== right.val) {
            return false;
        }

        left = left.next;
        right = right.next;
    }

    return true;
};