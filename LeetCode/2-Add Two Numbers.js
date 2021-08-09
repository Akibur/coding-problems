
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}


var addTwoNumbers = function (l1, l2) {
    let sum = 0;
    let remainder = 0;
    let res = new ListNode(0);
    let head = res;
    while (l1 || l2 || remainder) {
        let num1 = l1 ? l1.val : 0;
        let num2 = l2 ? l2.val : 0;

        sum = num1 + num2 + remainder;
        remainder = 0;

        if (sum > 9) {
            res.next = new ListNode((sum % 10));
            res = res.next;
            remainder = 1;

        } else {
            res.next = new ListNode(sum + remainder);
            res = res.next;
            remainder = 0;

        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;


    }
    return head.next;
};


let temp = new ListNode(2);
let l1 = temp;
temp.next = new ListNode(4);
temp = temp.next;
temp.next = new ListNode(3);
temp = temp.next;
temp.next = new ListNode(4);
temp = temp.next;



temp = new ListNode(5);
let l2 = temp;
temp.next = new ListNode(6);
temp = temp.next;
temp.next = new ListNode(4);
temp = temp.next;



console.log(addTwoNumbers(l1, l2));