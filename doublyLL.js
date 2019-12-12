/* eslint-disable indent */
/* eslint-disable strict */
class _Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLL {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head, null);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null, tempNode);
        }
    }
    insertBefore(item, key) {
        const keyNode = this.find(key);
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === keyNode) {
                const newNode = new _Node(item, keyNode, currNode);
                keyNode.prev = newNode;
                currNode.next = newNode;
                return newNode;
            }
            else {
                currNode = currNode.next;
            }
        }
    }
    insertAfter(item, key) {
        const keyNode = this.find(key);
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === keyNode) {
                const newNode = new _Node(item, keyNode.next, currNode)
                keyNode.next = newNode;
                return newNode;
            }
            else {
                currNode = currNode.next;
            }
        }
    }
    insertAt(item, position) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }

        for (let i = 1; i < position; i++) {
            if (!currNode.next) return null;
            currNode = currNode.next;
        }
        const newNode = new _Node(item, currNode.next, currNode)
        currNode.next = newNode;

        return newNode;
    }
    find(item) {
		let currNode = this.head;
		if (!this.head) {
			return null;
		}
		while (currNode.value !== item) {
			if (currNode.next === null) {
				return null;
			}
			else {
				currNode = currNode.next;
			}
		}
		return currNode;
    }
    remove(item) {
		if (!this.head) {
			return null;
		}
		if (this.head.value === item) {
			this.head = this.head.next;
			return;
		}
		let currNode = this.head;
		let previousNode = this.head;

		while ((currNode !== null) && (currNode.value !== item)) {
			previousNode = currNode;
			currNode = currNode.next;
		}
		if (currNode === null) {
			console.log('Item not found');
			return;
		}
        previousNode.next = currNode.next;
        previousNode.next.prev = previousNode;
	}
}

module.exports = { DoublyLL };