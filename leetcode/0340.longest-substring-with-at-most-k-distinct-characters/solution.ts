function longest(s: string, k: number) {
	let l: number = 0;
	let r: number = 0;
	let ans: number = 0;
	const charSet: Set<string> = new Set();

	while (r < s.length) {
		const char: string = s[r];
		charSet.add(char);
		while (l < r && charSet.size > k) {
			charSet.delete(s[l]);
			l++;
		}
		if (r - l + 1 > ans) {
			ans = r - l + 1;
		}
		r++;
	}

	return ans;
}

console.log(longest("eceba", 2));
