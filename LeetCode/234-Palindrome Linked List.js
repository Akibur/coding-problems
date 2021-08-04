//Given the head of a singly linked list, return true if it is a palindrome.



function ListNode(val, next) {

    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


var isPalindrome = function (head) {
    let slow = head;
    let fast = head, prev, temp;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    prev = slow, slow = slow.next; prev.next = null;
    while (slow) {
        temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    fast = head, slow = prev;
    while (slow) {
        if (fast.val !== slow.val) return false;
        else {
            fast = fast.next;
            slow = slow.next;
        }
    }

    return true;




    // let slow = head;
    // let fast = head;
    // let left = head;
    // let right = head;


    // while (fast && fast.next) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    // }
    // fast = head;

    // left = slow;
    // slow = slow.next;
    // right = slow.next;
    // left.next = null;

    // while (slow.next) {
    //     slow.next = left;
    //     left = slow;
    //     slow = right;
    //     right = right.next;
    // }

    // while (fast && fast.next) {
    //     console.log(slow.val, "-");
    //     console.log(fast.val);
    //     if (slow.val != fast.val) return false;

    //     slow = slow.next;
    //     fast = fast.next;

    // }



    // return true;



};

let temp = new ListNode(1);
let head = temp;
temp.next = new ListNode(2);
temp = temp.next;
temp.next = new ListNode(3);
temp = temp.next;
temp.next = new ListNode(1);


console.log(isPalindrome(head));
