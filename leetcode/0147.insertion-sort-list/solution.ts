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

function insertionSortList(head: ListNode | null): ListNode | null {
	if (!head) return head;

	const dummyHead: ListNode = new ListNode(0, head);

	let lastSorted: ListNode = head;
	while (lastSorted.next) {
		if (lastSorted.val > lastSorted.next.val) {
			const curr: ListNode = lastSorted.next;
			let prev: ListNode = dummyHead;
			while (prev.next && prev.next.val < curr.val) {
				prev = prev.next;
			}
			lastSorted.next = curr.next;
			curr.next = prev.next;
			prev.next = curr;
		} else {
			lastSorted = lastSorted.next;
		}
	}

	return dummyHead.next;
}
