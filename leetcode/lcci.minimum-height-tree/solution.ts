/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
	function subBST(left: number, right: number): TreeNode | null {
		if (left > right) return null;
		const mid = left + ((1 + right - left) >> 1);
		return new TreeNode(
			nums[mid],
			subBST(left, mid - 1),
			subBST(mid + 1, right)
		);
	}

	return subBST(0, nums.length - 1);
}
