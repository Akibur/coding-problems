// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var reverseBetween = function (head, left, right) {
    const dummy = new ListNode(0, head);
    let pre = dummy;
    for (let i = 1; i < left; i++) {
        pre = pre.next;
    }
    let current = pre.next;

    for (let i = 0; i < right - left; i++) {
        let NEXT = current.next;
        current.next = NEXT.next;
        NEXT.next = pre.next;
        pre.next = NEXT;
    }

    return dummy.next;

};

let temp = new ListNode(1);
let head = temp;
temp.next = new ListNode(2);
temp = temp.next;
temp.next = new ListNode(3);
temp = temp.next;
temp.next = new ListNode(4);
temp = temp.next;
temp.next = new ListNode(5);
temp = temp.next;

console.log(reverseBetween(head, 2, 4));

