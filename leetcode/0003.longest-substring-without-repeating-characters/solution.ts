function lengthOfLongestSubstring(s: string): number {
	const charSet: Set<string> = new Set();
	let l: number = 0;
	let r: number = 0;
	let ans: number = 0;
	const N: number = s.length;

	while (r < N) {
		const char = s[r];
		if (!charSet.has(char)) {
			charSet.add(char);
			r++;
		} else {
			while (l < r) {
				const lchar = s[l++];
				charSet.delete(lchar);
				if (lchar === char) {
					break;
				}
			}
		}

		ans = Math.max(ans, r - l);
	}

	return ans;
}
