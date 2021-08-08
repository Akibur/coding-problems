
// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var swapPairs = function (head) {
    // curr and prev on head 

    let dummy = new ListNode(0, head);
    let curr = head;
    let prev = dummy;
    let nxtPair = null;
    let second = null;

    //loop through the list 
    while (curr && curr.next) {
        //save ptrs
        nxtPair = curr.next.next;
        second = curr.next;


        //reverse this pair
        second.next = curr;
        curr.next = nxtPair;
        prev.next = second;

        //update ptrs
        prev = curr;
        curr = nxtPair;
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

console.log(swapPairs(head));