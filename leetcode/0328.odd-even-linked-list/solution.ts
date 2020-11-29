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

	const evenHead: ListNode | null = head.next;
	let odd: ListNode = head;
	let even: ListNode | null = evenHead;

	while (even && even.next) {
		odd.next = even.next;
		odd = even.next;
		even.next = odd.next;
		even = even.next;
	}

	odd.next = evenHead;

	return head;
}
