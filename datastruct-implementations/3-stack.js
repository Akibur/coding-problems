class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
            this.size++;
        } else {
            let node = new Node(val);
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
            this.size++;
        }
    }

    pop(val) {
        if (this.size == 0) return null;

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        temp.next = null;
        this.size--;
        return temp.val;


    }
}


let s = new Stack();
s.push(1);
s.push(2);
s.push(3);


console.log(s.pop());
console.log(s.pop());
console.log(s.pop());