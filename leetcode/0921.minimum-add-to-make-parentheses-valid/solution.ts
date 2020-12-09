function minAddToMakeValid(S: string): number {
	let left: number = 0;
	let right: number = 0;

	for (const ch of S) {
		if (ch === "(") {
			left++;
		} else if (ch === ")") {
			left > 0 ? left-- : right++;
		}
	}

	return left + right;
}
