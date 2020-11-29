/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
	const dummyHead = new ListNode();
	let nextNode: ListNode | null = head;

	while (nextNode) {
		const thisNode: ListNode = nextNode;
		nextNode = nextNode.next;
		thisNode.next = dummyHead.next;
		dummyHead.next = thisNode;
	}

	return dummyHead.next;
}
