class MaxBinaryHeap {
    constructor() {
        this.values = [40, 39, 33, 18, 27, 12];

    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];

        while (index > 0) {
            let parentIdx = Math.floor(index - 1 / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[index] = parent;
            index = parentIdx;

        }
    }

    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        parentIdx = 0;
        const length = this.values.length;

        let leftIdx = 2 * parentIdx + 1;
        let rightIdx = 2 * parentIdx + 2;


    }
}

let heap = new MaxBinaryHeap();

heap.insert(55);