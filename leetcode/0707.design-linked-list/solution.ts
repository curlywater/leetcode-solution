class MyLinkedList {
	head: ListNode;
	size: number;
	constructor() {
		this.head = new ListNode();
		this.size = 0;
	}

	get(index: number): number {
		if (index < 0 || index >= this.size) return -1;

		let curr: ListNode = this.head;
		for (let i = 0; i < index + 1; i++) {
			curr = <ListNode>curr.next;
		}
		return curr.val;
	}

	addAtHead(val: number): void {
		this.addAtIndex(0, val);
	}

	addAtTail(val: number): void {
		this.addAtIndex(this.size, val);
	}

	addAtIndex(index: number, val: number): void {
		if (index > this.size) return;
		if (index < 0) index = 0;

		this.size++;
		let prev: ListNode = this.head;
		for (let i = 0; i < index; i++) {
			prev = <ListNode>prev.next;
		}

		prev.next = new ListNode(val, prev.next);
	}

	deleteAtIndex(index: number): void {
		if (index < 0 || index >= this.size) return;

		this.size--;
		let prev: ListNode = this.head;
		for (let i = 0; i < index; i++) {
			prev = <ListNode>prev.next;
		}

		prev.next = (<ListNode>prev.next).next;
	}
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
