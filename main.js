const { LinkedList } = require('./LinkedList');

function display(list) {
	const result = [];
	let currNode = list.head;
	while (currNode !== null) {
		result.push(currNode.value);
		currNode = currNode.next;
	}
	console.log(result);
}

function size(list) {
	let size = 0;
	let currNode = list.head;
	while (currNode !== null) {
		size++;
		currNode = currNode.next;
	}
	return size;
}

function isEmpty(list) {
	let currNode = list.head;
	if (currNode) return false;
	else return true;
}

function findPrevious(list, item) {
	let currNode = list.head;
	while (currNode !== null) {
		if (currNode.next.value === item) return currNode;
		else currNode = currNode.next;
	}
}

function findLast(list) {
	let currNode = list.head;
	while (currNode !== null) {
		if (!currNode.next) return currNode;
		else currNode = currNode.next;
	}
}

function reverseList(list) {
	// if (!currNode.next) return;
	// reverseList(currNode.next, currNode);
	// currNode.next = prev;
	// list.head = currNode;

	let currNode = list.head;
	while (currNode !== null) {
		let prev = currNode;
		let 

	}
	list.head = currNode;
}

function main() {
	let SLL = new LinkedList();

	const seed = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
	for (let i = 0; i < seed.length; i++) {
		SLL.insertLast(seed[i]);
	}

	SLL.insertLast('Tauhida');

	SLL.remove('squirrel');

	SLL.insertBefore('Athena', 'Boomer');

	SLL.insertAfter('Hotdog', 'Helo');

	SLL.insertAt('Kat', 2);

	SLL.remove('Tauhida');

	display(SLL);
	// console.log(size(SLL));
	// console.log(isEmpty(SLL));
	// console.log(findPrevious(SLL, 'Husker'));
	// console.log(findLast(SLL));

	reverseList(SLL.head, null);
	display(SLL);
}

main();