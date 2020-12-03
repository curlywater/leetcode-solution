function maxAreaOfIsland(grid: number[][]): number {
	let row: number = grid.length;
	let col: number = grid[0].length;
	let ans: number = 0;

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (grid[i][j] === 1) {
				ans = Math.max(ans, dfs(i, j));
			}
		}
	}

	function dfs(r: number, c: number): number {
		if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] === 0) {
			return 0;
		}

		grid[r][c] = 0;
		return (
			1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c - 1) + dfs(r, c + 1)
		);
	}

	return ans;
}
