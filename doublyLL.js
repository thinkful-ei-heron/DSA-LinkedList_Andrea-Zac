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

}