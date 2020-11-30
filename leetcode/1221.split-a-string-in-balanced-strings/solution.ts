function balancedStringSplit(s: string): number {
	let ans: number = 0;
	let count: number = 0;

	for (const ch of s) {
		count += ch === "L" ? -1 : +1;
		if (count === 0) ans++;
	}

	return ans;
}
