class MyHashSet {
    constructor() {
        this.items = [];
    }

    add(value) {
        if (this.items.includes(value)) {
            return;
        }
        this.items.push(value);
    }

    remove(value) {
        const index = this.items.indexOf(value);

        if (index < 0) {
            return;
        }

        const firstHalf = this.items.slice(0, index);
        const secondHalf = this.items.slice(index + 1);

        this.items = firstHalf.concat(secondHalf);
    }

    contains(value) {
        return this.items.includes(value);
    }
}