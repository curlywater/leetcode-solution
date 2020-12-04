/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
	if (!board.length || !board[0].length) return;
	const row: number = board.length;
	const col: number = board[0].length;

	for (let i = 0; i < row; i++) {
		dfs(i, 0);
		dfs(i, col - 1);
	}

	for (let i = 1; i < col - 1; i++) {
		dfs(0, i);
		dfs(row - 1, i);
	}

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (board[i][j] === "O") {
				board[i][j] = "X";
			} else if (board[i][j] === "A") {
				board[i][j] = "O";
			}
		}
	}

	function dfs(r: number, c: number) {
		if (r < 0 || r >= row || c < 0 || c >= col || board[r][c] !== "O") {
			return;
		}
		board[r][c] = "A";
		dfs(r - 1, c);
		dfs(r + 1, c);
		dfs(r, c - 1);
		dfs(r, c + 1);
	}
}
