function isSubsequence(s: string, t: string): boolean {
	let index1: number = 0;
	let index2: number = 0;

	const n1: number = s.length;
	const n2: number = t.length;

	while (index1 < n1 && index2 < n2) {
		if (s[index1] === t[index2]) {
			index1++;
		}
		index2++;
	}

	return index1 === n1;
}
