function partitionLabels(S: string): number[] {
	const N = S.length;
	const lastDict: {
		[key: string]: number;
	} = {};
	let start: number = 0;
	let end: number = 0;
	let ans: number[] = [];

	for (let i = 0; i < N; i++) {
		lastDict[S[i]] = i;
	}

	for (let i = 0; i < N; i++) {
		end = Math.max(end, lastDict[S[i]]);
		if (end === i) {
			ans.push(end - start + 1);
			start = end + 1;
		}
	}

	return ans;
}
