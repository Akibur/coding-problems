class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {

        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (this.length == 0) {
            this.head = node;
            this.tail = node;
            this.length++;

        } else {
            this.tail.next = node;
            this.tail = node;
            this.tail.next = null;
            this.length++;
        }

    }

    pop() {
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            return undefined;
        }
        let temp = this.head;
        let tempVal = 0;
        let counter = 1;
        while (counter < this.length - 1) {
            temp = temp.next;
            counter++;
        }
        tempVal = this.tail.val;
        this.tail = temp;
        this.tail.next = null;
        this.length--;
        return tempVal;
    }

    shift() {
        if (!this.head) return undefined;
        let temp = this.head.next;
        let val = this.head.val;

        this.head.next = null;
        this.head = temp;
        this.length--;
        return val;

    }

    unShift(val) {
        let node = new Node(val);
        if (this.length == 0) {
            this.head = node;
            this.tail = node;
            this.length++;

        } else {
            node.next = this.head;
            this.head = node;
            this.length++;
        }

    }

    set(pos, val) {
        if (pos < 0 || pos > this.length - 1) return undefined;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            return undefined;
        }
        let temp = this.head;
        let counter = 0;
        while (counter != pos) {
            temp = temp.next;
            counter++;
        }

        temp.val = val;

    }

    get(pos) {
        if (pos < 0 || pos > this.length) return undefined;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            return undefined;
        }
        let temp = this.head;
        let counter = 0;
        while (counter != pos) {
            temp = temp.next;
            counter++;
        }

        return temp.val;
    }



    insert(pos, val) {
        if (pos < 0 || pos > this.length) return undefined;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            return undefined;
        }
        let node = new Node(val);
        let temp = this.head;


        if (pos == 0) {
            node.next = this.head;
            this.head = node;
            this.length++;

        } else if (pos == this.length) {
            this.tail.next = node;
            this.tail = node;
            this.length++;



        } else {
            let counter = 0;
            while (counter != pos - 1) {
                temp = temp.next;
                counter++;
            }
            node.next = temp.next;
            temp.next = node;
            this.length++;

        }




    }

    remove(pos) {
        if (pos < 0 || pos >= this.length) return undefined;

        let temp = this.head;


        if (pos == 0) {
            temp = this.head;
            this.head = this.head.next;
            temp.next = null;
            this.length--;


        } else if (pos == this.length - 1) {
            let counter = 0;
            while (counter != pos - 1) {
                temp = temp.next;
                counter++;
            }
            this.tail = temp;
            this.tail.next = null;
            this.length--;



        } else {
            let counter = 0;
            while (counter != pos - 1) {
                temp = temp.next;
                counter++;
            }
            let temp2 = temp.next;
            temp.next = temp2.next;
            temp2.next = null;
            this.length--;


        }

    }

    reverse() {
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
            return undefined;
        }
        let current = null;
        let prev = null;
        //swap head and tail
        let next = this.head;
        this.head = this.tail;
        this.tail = next;

        prev = this.tail;
        current = this.tail.next;

        while (1) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            if (current.next == null) {
                current.next = prev;
                this.tail.next = null;
                return;

            }
        }




    }

    printAll() {
        if (!this.head) return undefined;

        let pointer = this.head;

        while (pointer != null) {
            console.log(pointer.val);
            console.log("V");
            pointer = pointer.next;
        }

    }
}

let LS = new SinglyLinkedList();
LS.push(1);
LS.push(2);
LS.push(3);
LS.push(4);




console.log(LS.reverse());


LS.printAll();


