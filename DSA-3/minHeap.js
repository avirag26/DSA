class MinHeap {
    constructor() {
        this.heap = [];
    }

    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return 2 * index + 1;
    }

    rightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = this.parentIndex(index);

            // MINHEAP condition (fixed)
            if (this.heap[parent] > this.heap[index]) {
                this.swap(parent, index);
                index = parent;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        let left = this.leftChildIndex(index);
        let right = this.rightChildIndex(index);
        let smallest = index;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);   // FIXED
        }
    }

    printHeap() {
        console.log(this.heap);
    }
}

const heap = new MinHeap();
heap.insert(70);
heap.insert(50);
heap.insert(40);
heap.insert(45);
heap.insert(35);
heap.insert(10);
heap.insert(9);
heap.insert(39);
heap.insert(16);
heap.insert(60);

heap.printHeap();
