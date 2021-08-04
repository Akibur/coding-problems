// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
var deleteDuplicates = function (head) {
    var current = head;

    while (current) {
        if (current.next !== null && current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};


let temp = new ListNode(1);
let head = temp;
temp.next = new ListNode(1);
temp = temp.next;
temp.next = new ListNode(4);

console.log(deleteDuplicates(head));