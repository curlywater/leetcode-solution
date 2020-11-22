function isAnagram(s: string, t: string): boolean {
	const charMap: Map<string, number> = new Map();

	for (const ch of s) {
		charMap.set(ch, (charMap.get(ch) || 0) + 1);
	}

	for (const ch of t) {
		if (!charMap.has(ch)) {
			return false;
		} else {
			const count = <number>charMap.get(ch);
			if (count === 1) {
				charMap.delete(ch);
			} else {
				charMap.set(ch, count - 1);
			}
		}
	}

	return charMap.size === 0;
}
