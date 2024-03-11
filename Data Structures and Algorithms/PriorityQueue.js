// Essentially the same code as MaxBinaryHeap
// Commented lines are for MinBinaryHeap version

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		let newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const el = this.values[idx];
		while (idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (el.priority <= parent.priority) break;
			// if (el.priority >= parent.priority) break;
			this.values[parentIdx] = el;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}
	dequeue() {
		const max = this.values[0];
		// const min = this.values[0];
		const end = this.values.pop();
		if (this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return max;
		// return min;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const el = this.values[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild.priority > el.priority) {
					// if (leftChild.priority < el.priority) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild.priority > el.priority) ||
					// (swap === null && rightChild.priority < el.priority) ||
					(swap !== null && rightChild.priority > leftChild.priority)
					// (swap !== null && rightChild.priority < leftChild.priority)
				) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = el;
			idx = swap;
		}
	}
}

// Execution
let ER = new PriorityQueue();
ER.enqueue("common cold", 1);
ER.enqueue("gunshot wound", 5);
ER.enqueue("high fever", 2);
// ER.enqueue("common cold", 5);
// ER.enqueue("gunshot wound", 1);
// ER.enqueue("high fever", 3);
