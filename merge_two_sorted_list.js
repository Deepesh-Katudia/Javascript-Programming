/*
Merge Two Sorted Lists

You are given two sorted linked lists.

You need to merge them into one sorted linked list.

Example
list1: 1 -> 2 -> 4
list2: 1 -> 3 -> 4

After merging:
1 -> 1 -> 2 -> 3 -> 4 -> 4

So the answer is:
1 -> 1 -> 2 -> 3 -> 4 -> 4
*/

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while(list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if(list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
};
