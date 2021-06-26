class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //like push
    enqueue(val) {
        let node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
            this.size++;
        } else {
            this.last.next = node;
            this.last = node;
            this.size++;
        }
    }

    //like pop
    dequeue() {
        if (this.size == 0) return null;

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;


    }
}


let s = new Queue();
s.enqueue(1);
s.enqueue(2);
s.enqueue(3);


console.log(s.dequeue());
console.log(s.dequeue());
console.log(s.dequeue());