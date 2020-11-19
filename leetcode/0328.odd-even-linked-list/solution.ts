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

function oddEvenList(head: ListNode | null): ListNode | null {
	if (head === null) return head;
	const oddHead: ListNode | null = head.next;
	let even: ListNode = head;
	let odd: ListNode | null = oddHead;

	while (odd && odd.next) {
		even.next = odd.next;
		even = even.next;
		odd.next = even.next;
		odd = odd.next;
	}

	even.next = oddHead;

	return head;
}
