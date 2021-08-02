// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

function ListNode(val) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var hasCycle = function (head) {
    if (!head) return false;
    if (!head.next) return false;

    let slow = head;
    let fast = head.next;

    while (fast != slow) {

        if (!fast.next || !fast.next.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
};


let temp = new ListNode(3);
let head = temp;
temp.next = new ListNode(2);
temp = temp.next;
let cycle = temp;
temp.next = new ListNode(0);
temp = temp.next;
temp.next = new ListNode(-4);
temp = temp.next;
temp.next = cycle;


console.log(hasCycle(head));