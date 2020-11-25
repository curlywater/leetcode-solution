function sortString(s: string): string {
	const chars: number[] = new Array(26).fill(0);
	const ans: string[] = [];

	for (const ch of s) {
		chars[ch.charCodeAt(0) - 97] += 1;
	}

	const len = chars.length;
	while (ans.length < s.length) {
		for (let i = 0; i < len; i++) {
			if (chars[i]) {
				ans.push(String.fromCharCode(i + 97));
				chars[i]--;
			}
		}
		for (let i = len - 1; i >= 0; i--) {
			if (chars[i]) {
				ans.push(String.fromCharCode(i + 97));
				chars[i]--;
			}
		}
	}

	return ans.join("");
}
