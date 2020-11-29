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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	if (!head) return null;

	const dummyHead = new ListNode(0, head);
	let slow: ListNode = dummyHead;
	let fast: ListNode = dummyHead;

	while (n) {
		fast = <ListNode>fast.next;
		n--;
	}

	while (fast.next) {
		fast = fast.next;
		slow = <ListNode>slow.next;
	}

	slow.next = (<ListNode>slow.next).next;

	return dummyHead.next;
}
