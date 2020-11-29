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

function middleNode(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;

	let slow: ListNode = head;
	let fast: ListNode | null = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		slow = <ListNode>slow.next;
	}

	return slow;
}
