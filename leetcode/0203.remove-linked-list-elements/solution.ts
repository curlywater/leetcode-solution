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

function removeElements(head: ListNode | null, val: number): ListNode | null {
	const dummyHead = new ListNode(0, head);
	let listNode: ListNode | null = dummyHead;

	while (listNode.next) {
		if (listNode.next.val === val) {
			listNode.next = listNode.next.next;
		} else {
			listNode = listNode.next;
		}
	}

	return dummyHead.next;
}
