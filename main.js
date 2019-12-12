/* eslint-disable indent */
/* eslint-disable strict */
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

function isCycle(list) {
	let currNode = list.head;
	let checkList = [];
	while (currNode !== null) {
		if (!currNode.next) return 'Is not a cycle';
		if (checkList.includes(currNode.next)) return 'It is a cycle';
		checkList.push(currNode);
		currNode = currNode.next;
	}
}

function reverseList(list) {
	// if (!currNode.next) return;
	// reverseList(currNode.next, currNode);
	// currNode.next = prev;
	// list.head = currNode;

	let currNode = list.head;
	let reversed = null;
	while (currNode !== null) {
		let prev = currNode.next;

		currNode.next = reversed;
		reversed = currNode;

		currNode = prev;

	}
	list.head = reversed;

	return list;
}

function thirdFromEnd(list) {
	let currNode = list.head;
	while (currNode !== null) {
		if (!currNode.next.next.next) return currNode;
		else currNode = currNode.next;
	}
}

function middleOfList(list) {
	let currNode1 = list.head;
	let currNode2 = list.head;

	while (currNode2 !== null) {
		if (!currNode2.next || !currNode2.next.next) {
			return currNode1;
		}
		currNode1 = currNode1.next
		currNode2 = currNode2.next.next
	}
}

function main() {
	let SLL = new LinkedList();
	let CycleList = new LinkedList();

	const seed = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
	for (let i = 0; i < seed.length; i++) {
		SLL.insertLast(seed[i]);
	}
	for (let i = 0; i < seed.length; i++) {
		CycleList.insertLast(seed[i]);
	}

	const lastNode = findLast(CycleList);

	lastNode.next = CycleList.head;

	SLL.insertLast('Tauhida');

	SLL.remove('squirrel');

	SLL.insertBefore('Athena', 'Boomer');

	SLL.insertAfter('Hotdog', 'Helo');

	SLL.insertAt('Kat', 2);

	//SLL.remove('Tauhida');

	display(SLL);
	// console.log(size(SLL));
	// console.log(isEmpty(SLL));
	// console.log(findPrevious(SLL, 'Husker'));
	// console.log(findLast(SLL));

	reverseList(SLL);
	display(SLL);
	// console.log(thirdFromEnd(SLL));
	// console.log(middleOfList(SLL));


	console.log(isCycle(CycleList));

}

main();