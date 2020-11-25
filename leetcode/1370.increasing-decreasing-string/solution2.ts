function sortString(s: string): string {
	const map: Map<string, number> = new Map();
	const ans: string[] = [];

	for (const ch of s) {
		if (map.has(ch)) {
			map.set(ch, <number>map.get(ch) + 1);
		} else {
			map.set(ch, 1);
		}
	}

	const chars: string[] = Array.from(map.keys()).sort();
	const len = chars.length;
	while (ans.length < s.length) {
		for (let i = 0; i < len; i++) {
			const ch = chars[i];
			const count = <number>map.get(ch);
			if (count) {
				ans.push(ch);
				map.set(ch, count - 1);
			}
		}
		for (let i = len - 1; i >= 0; i--) {
			const ch = chars[i];
			const count = <number>map.get(ch);
			if (count) {
				ans.push(ch);
				map.set(ch, count - 1);
			}
		}
	}

	return ans.join("");
}
