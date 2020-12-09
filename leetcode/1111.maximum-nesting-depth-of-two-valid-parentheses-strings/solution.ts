function maxDepthAfterSplit(seq: string): number[] {
	const ans: number[] = [];
	let depth: number = 0;
	for (let i = 0, len = seq.length; i < len; i++) {
		if (seq[i] === "(") {
			depth += 1;
			ans[i] = depth % 2;
		} else {
			ans[i] = depth % 2;
			depth -= 1;
		}
	}
	return ans;
}
