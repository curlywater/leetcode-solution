function minWindow(s: string, t: string): string {
	const tchars: Map<string, number> = new Map();

	for (const ch of t) {
		if (!tchars.has(ch)) {
			tchars.set(ch, 1);
		} else {
			tchars.set(ch, <number>tchars.get(ch) + 1);
		}
	}

	let l: number = 0;
	let r: number = 0;
	let ansL: number = -1;
	let ansLen: number = Infinity;

	while (r < s.length) {
		const ch = s[r];
		if (tchars.has(ch)) {
			const charCount = <number>tchars.get(ch) - 1;
			tchars.set(ch, charCount);
			if (charCount === 0) {
				while (checkCover(tchars) && l <= r) {
					if (r - l + 1 < ansLen) {
						ansL = l;
						ansLen = r - l + 1;
					}
					const ch = s[l];
					if (tchars.has(ch)) {
						tchars.set(ch, <number>tchars.get(ch) + 1);
					}
					l++;
				}
			}
		}

		r++;
	}

	return ansL === -1 ? "" : s.substr(ansL, ansLen);
}

function checkCover(chars: Map<string, number>) {
	for (const ch of chars) {
		if (ch[1] > 0) {
			return false;
		}
	}
	return true;
}
