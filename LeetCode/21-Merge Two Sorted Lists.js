// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}




var mergeTwoLists = function (l1, l2) {
    // console.log(l1.head.val);
    if (!l1) return l2;
    if (!l2) return l1;

    let newLS = new ListNode(-1);
    let head = newLS;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            newLS.next = new ListNode(l1.val);
            newLS = newLS.next;
            l1 = l1.next;

        } else if (l1.val > l2.val) {
            newLS.next = new ListNode(l2.val);
            newLS = newLS.next;
            l2 = l2.next;

        } else {
            newLS.next = new ListNode(l1.val);
            newLS = newLS.next;
            l1 = l1.next;

            newLS.next = new ListNode(l2.val);
            newLS = newLS.next;
            l2 = l2.next;
        }
    }

    if (l1) newLS.next = l1;
    if (l2) newLS.next = l2;




    return head.next;


};
let temp = new ListNode(1);
let l1 = temp;
temp.next = new ListNode(2);
temp = temp.next;
temp.next = new ListNode(4);

temp = new ListNode(1);
let l2 = temp;
temp.next = new ListNode(3);
temp = temp.next;
temp.next = new ListNode(4);

console.log(mergeTwoLists(l1, l2));