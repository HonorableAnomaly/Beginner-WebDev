// Implemented using separate chaining, not linear probing

class HashTable {
	// Prime number length is infinitely better on collisions
	constructor(size = 53) {
		this.keymap = new Array(size);
	}
	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let val = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + val) % this.keymap.length;
		}
		return total;
	}
	// Push to table
	set(key, val) {
		let idx = this._hash(key);
		if (!this.keymap[idx]) {
			this.keymap[idx] = [];
		}
		this.keymap[idx].push([key, val]);
	}
	// Get from table
	get(key) {
		let idx = this._hash(key);
		if (this.keymap[idx]) {
			for (let i = 0; i < this.keymap[idx].length; i++) {
				if (this.keymap[idx][i][0] === key) {
					return this.keymap[idx][i][1];
				}
			}
		}
		return undefined;
	}
	keys() {
		let keysArr = [];
		for (let i = 0; i < this.keymap.length; i++) {
			if (this.keymap[i]) {
				for (let j = 0; this.keymap[i].length; j++) {
					if (!keysArr.includes(this.keymap[i][j][0])) {
						keysArr.push(this.keymap[i][j][0]);
					}
				}
			}
		}
		return keysArr;
	}
	values() {
		let valuesArr = [];
		for (let i = 0; i < this.keymap.length; i++) {
			if (this.keymap[i]) {
				for (let j = 0; this.keymap[i].length; j++) {
					if (!valuesArr.includes(this.keymap[i][j][1])) {
						valuesArr.push(this.keymap[i][j][1]);
					}
				}
			}
		}
		return valuesArr;
	}
}

// Execution for testing
let ht = new HashTable(17);
ht.set("maroon", "800000");
ht.set("yellow", "FFFF00");
ht.set("olive", "808000");
ht.set("salmon", "FA8072");
ht.set("lightcoral", "F08080");
ht.set("mediumvioletred", "C71585");
ht.set("plum", "DDA0DD");
ht.set("purple", "DDA0DD");
ht.set("violet", "DDA0DD");
