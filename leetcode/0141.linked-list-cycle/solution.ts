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

function hasCycle(head: ListNode | null): boolean {
	if (!head || !head.next) return false;
	let slow: ListNode = head;
	let fast: ListNode | null = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		if (slow.next) {
			slow = slow.next;
		}
		if (slow === fast) {
			return true;
		}
	}

	return false;
}
