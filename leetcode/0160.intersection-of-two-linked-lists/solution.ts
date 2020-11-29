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

function getIntersectionNode(
	headA: ListNode | null,
	headB: ListNode | null
): ListNode | null {
	let nodeA: ListNode | null = headA;
	let nodeB: ListNode | null = headB;

	while (nodeA !== nodeB) {
		nodeA = nodeA ? nodeA.next : headB;
		nodeB = nodeB ? nodeB.next : headA;
	}

	return nodeA;
}
