// Given the head of a singly linked list, reverse the list, and return the reversed list.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var reverseList = function (head) {
    if (this.length === 0) return [];
    let nxt = null;
    let cur = head;
    let prev = null;


    while (cur) {
        nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }

    head = prev;

    return head;


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

console.log(reverseList(head));