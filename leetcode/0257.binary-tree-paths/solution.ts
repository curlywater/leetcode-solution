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
	const ans: string[] = [];
	dfs(root, "");
	return ans;

	function dfs(root: TreeNode | null, trace: string) {
		if (!root) return;

		trace += `${root.val}`;
		if (!root.left && !root.right) {
			ans.push(trace);
			return;
		}

		trace += "->";
		dfs(root.left, trace);
		dfs(root.right, trace);
	}
}
