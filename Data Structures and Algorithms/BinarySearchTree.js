class Node {
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(val) {
		let newNode = new Node(val);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			let current = this.root;
			while (true) {
				if (val === current.val) return undefined;
				if (val < current.val) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}
				} else if (val > current.val) {
					if (current.right === null) {
						current.right = newNode;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}
	contains(val) {
		if (this.root === null) return false;
		let current = this.root,
			found = false;
		while (current && !found) {
			if (val < current.val) {
				current = current.left;
			} else if (val > current.val) {
				current = current.right;
			} else {
				return true;
			}
		}
		return false;
	}
	// Set up for binary search
	breadthFirstSearch() {
		let data = [],
			queue = [],
			node;
		queue.push(this.root);

		while (queue.length) {
			node = queue.shift();
			data.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}
	depthFirstSearchPreOrder() {
		let data = [];

		function traverse(node) {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
	// PreOrder with the push after the traverse
	depthFirstSearchPostOrder() {
		let data = [];

		function traverse(node) {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value);
		}
		traverse(this.root);
		return data;
	}
	// PreOrder with the push in the middle of the traverse
	depthFirstSearchInOrder() {
		let data = [];

		function traverse(node) {
			node.left && traverse(node.left);
			data.push(node.value);
			node.right && traverse(node.right);
		}
		traverse(this.root);
		return data;
	}
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(7);
tree.root.right = new Node(15);
tree.root.left.right = new Node(9);
