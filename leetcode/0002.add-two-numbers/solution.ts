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

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let carry: number = 0;
	let dummyHead: ListNode = new ListNode();
	let lastNode: ListNode = dummyHead;
	while (l1 || l2) {
		let sum: number = 0;
		if (!l1) {
			sum = (<ListNode>l2).val;
		} else if (!l2) {
			sum = (<ListNode>l1).val;
		} else {
			sum = l1.val + l2.val;
		}

		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;

		sum += carry;
		carry = Math.floor(sum / 10);

		lastNode.next = new ListNode(sum - carry * 10);
		lastNode = lastNode.next;
	}

	if (carry) {
		lastNode.next = new ListNode(carry);
	}

	return dummyHead.next;
}
