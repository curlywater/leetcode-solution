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

function binaryTreePaths(root: TreeNode | null): string[] {
	if (!root) return [];

	const ans: string[] = [];
	const trace: number[] = [];
	dfs(root);
	return ans;

	function dfs(root: TreeNode) {
		trace.push(root.val);
		if (root.left) {
			dfs(root.left);
		}
		if (root.right) {
			dfs(root.right);
		}
		if (!root.left && !root.right) {
			ans.push(trace.join("->"));
		}
		trace.pop();
	}
}
