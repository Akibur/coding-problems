

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
var detectCycle = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};


let temp = new ListNode(3);
let head = temp;
temp.next = new ListNode(2);
temp = temp.next;
temp.next = head;

// let temp = new ListNode(3);
// let head = temp;
// temp.next = new ListNode(2);
// temp = temp.next;
// let cycle = temp;
// temp.next = new ListNode(0);
// temp = temp.next;
// temp.next = new ListNode(-4);
// temp = temp.next;
// temp.next = cycle;


console.log(detectCycle(head));