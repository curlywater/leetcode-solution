function findLongestWord(s: string, d: string[]): string {
	d.sort((a, b) => b.length - a.length || a.localeCompare(b));

	for (const str of d) {
		if (substr(str, s)) {
			return str;
		}
	}

	return "";
}

function substr(sub: string, str: string): boolean {
	let i: number = 0;
	let j: number = 0;

	while (i < sub.length && j < str.length) {
		if (sub[i] === str[j]) {
			i++;
		}
		j++;
	}

	return i === sub.length ? true : false;
}
