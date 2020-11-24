function isSubsequence(s: string, t: string): boolean {
	const n1: number = s.length;
	const n2: number = t.length;
	const dp: number[][] = [];

	dp[n2] = new Array(26).fill(n2);

	for (let i = n2 - 1; i >= 0; i--) {
		dp[i] = [];
		for (let j = 0; j < 26; j++) {
			if (t[i] === String.fromCharCode(97 + j)) {
				dp[i][j] = i;
			} else {
				dp[i][j] = dp[i + 1][j];
			}
		}
	}

	let add: number = 0;
	for (let i = 0; i < n1; i++) {
		const next = dp[add][s[i].charCodeAt(0) - 97];
		if (next === n2) {
			return false;
		}
		add = next + 1;
	}

	return true;
}
