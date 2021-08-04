// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


var removeElements = function (head, val) {
    let head2 = 0;
    let newL = new ListNode(0);
    head2 = newL;
    while (head) {
        if (head.val != val) {
            newL.next = new ListNode(head.val);
            newL = newL.next;
        }
        head = head.next;
    }
    return head2.next;
};

let temp = new ListNode(1);
let head = temp;
temp.next = new ListNode(2);
temp = temp.next;
temp.next = new ListNode(4);

console.log(removeElements(head, val));