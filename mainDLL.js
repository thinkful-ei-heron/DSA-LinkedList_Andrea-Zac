const { DoublyLL } = require('./doublyLL');

function display(list) {
	const result = [];
	let currNode = list.head;
	while (currNode !== null) {
		result.push(currNode.value);
		currNode = currNode.next;
	}
	console.log(result);
}

function reverseDoubly(list) {
	let currNode = list.head;
	let reversed = null;
	while (currNode !== null) {
		let prev = currNode.next;

		currNode.next = reversed;
		currNode.prev = prev;
		reversed = currNode;

		currNode = prev;

	}
	list.head = reversed;


	return list;
}

let DLL = new DoublyLL();
const seed = ['Aquaria', 'Caprica', 'Gemenon', 'Picon', 'Sagittaron'];
	for (let i = 0; i < seed.length; i++) {
		DLL.insertLast(seed[i]);
	}

DLL.insertLast('Tauron');
DLL.remove('Picon');

display(DLL);
reverseDoubly(DLL);
display(DLL);
console.log(DLL.find('Sagittaron'));


