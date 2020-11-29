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

function detectCycle(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return null;
	let slow: ListNode = head;
	let fast: ListNode | null = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = <ListNode>slow.next;

		if (slow === fast) {
			let ptr: ListNode = head;
			while (slow !== ptr) {
				slow = <ListNode>slow.next;
				ptr = <ListNode>ptr.next;
			}
			return ptr;
		}
	}

	return null;
}
