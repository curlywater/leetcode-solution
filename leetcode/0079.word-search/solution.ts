function exist(board: string[][], word: string): boolean {
	const row: number = board.length;
	const col: number = board[0].length;
	const directions: number[] = [-1, 0, 1, 0, -1];
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (board[i][j] === word[0]) {
				if (backtracking(i, j, 1)) {
					return true;
				}
			}
		}
	}
	return false;

	function backtracking(r: number, c: number, charIndex: number): boolean {
		if (charIndex === word.length) {
			return true;
		}

		const original: string = board[r][c];
		board[r][c] = "";
		for (let k = 0; k < 4; k++) {
			const x = r + directions[k];
			const y = c + directions[k + 1];

			if (
				x >= 0 &&
				x < row &&
				y >= 0 &&
				y < col &&
				word[charIndex] === board[x][y]
			) {
				if (backtracking(x, y, charIndex + 1)) {
					return true;
				}
			}
		}
		board[r][c] = original;

		return false;
	}
}
