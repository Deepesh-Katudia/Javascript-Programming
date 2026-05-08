/*
61. Rotate List

Given the head of a linked list, rotate the list to the right by k places.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:

Input: head = [0,1,2], k = 4
Output: [2,0,1]
 
Constraints:
The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109
*/

var rotateRight = function(head, k) {
    if(head === null || head.next === null || k === 0) {
        return head;
    }

    let length = 1;
    let tail = head;

    while(tail.next !== null){
        tail = tail.next;
        length++;
    }

    k = k % length;

    if(k==0) {
        return head;
    }

    tail.next = head;

    let toNewTail = length - k;
    let newTail = head;

    for(let i =1; i < toNewTail; i++){
        newTail = newTail.next;
    }

    let newHead = newTail.next;

    newTail.next = null;

    return newHead;
};