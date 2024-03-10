class Node {
	constructor() {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		let poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}
	shift() {
		if (this.length === 0) return undefined;
		let oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}
	unshift(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(idx) {
		if (idx < 0 || idx >= this.length) return null;
		let count, current;
		if (idx <= this.length / 2) {
			count = 0;
			current = this.head;
			while (count != idx) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;
			while (count != idx) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}
	set(idx, val) {
		let foundNode = this.get(idx);
		if (foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	insert(idx, val) {
		if (idx < 0 || idx > this.length) return false;
		if (idx === this.length) return !!this.push(val);
		if (idx === 0) return !!this.unshift(val);

		let newNode = new Node(val);
		let prevNode = this.get(idx - 1);
		let afterNode = prevNode.next;

		(prevNode.next = newNode), (newNode.prev = prevNode);
		(newNode.next = afterNode), (afterNode.prev = newNode);
		// Below is the same as above, refactored
		// prevNode.next = newNode;
		// newNode.prev = prevNode;
		// newNode.next = afterNode;
		// afterNode.prev = newNode;
		this.length++;
		return true;
	}
	remove(idx) {
		if (idx < 0 || idx >= this.length) return undefined;
		if (idx === this.length - 1) return this.pop();
		if (idx === 0) return this.shift();

		let removedNode = this.get(idx);
		let beforeNode = removedNode.prev;
		let afterNode = removedNode.next;

		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;
		// Below is the same as above, refactored
		// removedNode.prev.next = removedNode.next;
		// removedNode.next.prev = removedNode.prev;
		removedNode.prev = null;
		removedNode.next = null;
		this.length--;
		return removedNode;
	}
}

let list = new DoublyLinkedList();
list.push("Bulbasaur");
list.push("Charmander");
list.push("Squirtle");
list.push("<3");
list.push(":)");
// list.shift();
list.get(3);
