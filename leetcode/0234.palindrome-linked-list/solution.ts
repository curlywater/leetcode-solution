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

function isPalindrome(head: ListNode | null): boolean {
	if (!head || !head.next) return true;
	const tailOfFirst: ListNode = getMidPre(head);
	const headOfSecond: ListNode = reverse(<ListNode>tailOfFirst.next);
	tailOfFirst.next = null;

	let p: ListNode | null = head;
	let q: ListNode | null = headOfSecond;

	let ans: boolean = true;
	while (p && q) {
		if (p.val !== q.val) {
			ans = false;
			break;
		}
		p = p.next;
		q = q.next;
	}

	tailOfFirst.next = reverse(headOfSecond);

	return ans;
}

function getMidPre(head: ListNode): ListNode {
	let slow: ListNode = head;
	let fast: ListNode | null = head;

	while (fast && fast.next) {
		fast = fast.next;
		if (fast.next) {
			fast = fast.next;
			slow = <ListNode>slow.next;
		}
	}

	return slow;
}

function reverse(head: ListNode): ListNode {
	const dummyHead = new ListNode();
	let node: ListNode | null = head;

	while (node) {
		const temp: ListNode | null = node.next;
		node.next = dummyHead.next;
		dummyHead.next = node;
		node = temp;
	}

	return <ListNode>dummyHead.next;
}
