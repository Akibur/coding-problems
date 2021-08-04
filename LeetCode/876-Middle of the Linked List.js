// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.
function ListNode(val) {

    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
var middleNode = function (head) {
    let counter = 0;
    let temp = head;
    while (temp) {
        counter++;
        temp = temp.next;
    }
    console.log(counter);
    if (counter % 2 == 0) {
        counter = Math.ceil(counter / 2) + 1;
    } else {
        counter = Math.ceil(counter / 2);
    }
    console.log(counter);

    temp = head;
    while (counter > 1) {

        temp = temp.next;

        counter--;

    }

    return temp;
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

console.log(middleNode(head));

