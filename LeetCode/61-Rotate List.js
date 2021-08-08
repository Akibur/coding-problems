// Given the head of a linked list, rotate the list to the right by k places.



function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var rotateRight = function (head, k) {

    // More efficient solution. Using k we find the new tail and append the rest of the list with the head

    //find the length
    let length = 1;
    let pt = head;
    while (pt && pt.next) {
        length++;
        pt = pt.next;
    }

    //we're using modulo for the edge case of if the length is smaller than k
    k = k % length;

    //edge case -> if k is 0, we don't need a rotation
    if (k === 0) {
        return head;
    }

    //find the new tail
    let newTail = head;
    let spaces = length - k;
    while (spaces > 1) {
        spaces--;
        newTail = newTail.next;
    }

    //save the new head and reset appropriately 
    let newHead = newTail.next;
    newTail.next = null;
    pt.next = head;
    return newHead;




    // This uses O(n2) speed

    // if (!head || k == 0) return head;
    // let cur = head;
    // let prev = null;
    // // Loop K times 
    // while (k > 0) {
    //     let cur = head;
    //     prev = null;

    //     while (cur.next) {
    //         prev = cur;
    //         cur = cur.next;
    //     }

    //     cur.next = head;
    //     prev.next = null;
    //     head = cur;
    //     k--;
    // }

    // return head;
    //Loop to the end of the list 
    // If to end and prev
    //end.next = head
    //prev.next =null

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

let k = 2;

console.log(rotateRight(head, k));