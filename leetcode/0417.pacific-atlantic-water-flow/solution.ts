function pacificAtlantic(matrix: number[][]): number[][] {
	if (!matrix.length || !matrix[0].length) return [];
	let ans: number[][] = [];
	const directions: number[] = [-1, 0, 1, 0, -1];
	const row: number = matrix.length;
	const col: number = matrix[0].length;
	const canReachP: boolean[][] = Array.from({ length: row }, () =>
		new Array(col).fill(false)
	);
	const canReachA: boolean[][] = Array.from({ length: row }, () =>
		new Array(col).fill(false)
	);

	// 左右边界
	for (let i = 0; i < row; i++) {
		dfs(canReachP, i, 0);
		dfs(canReachA, i, col - 1);
	}
	// 上下边界
	for (let i = 0; i < col; i++) {
		dfs(canReachP, 0, i);
		dfs(canReachA, row - 1, i);
	}

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (canReachP[i][j] && canReachA[i][j]) {
				ans.push([i, j]);
			}
		}
	}

	return ans;

	function dfs(canReach: boolean[][], r: number, c: number) {
		if (canReach[r][c]) {
			return;
		}
		canReach[r][c] = true;

		for (let k = 0; k < 4; k++) {
			const x = r + directions[k];
			const y = c + directions[k + 1];
			if (
				x >= 0 &&
				x < row &&
				y >= 0 &&
				y < col &&
				matrix[r][c] <= matrix[x][y]
			) {
				dfs(canReach, x, y);
			}
		}
	}
}
