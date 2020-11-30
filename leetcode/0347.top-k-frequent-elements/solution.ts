function topKFrequent(nums: number[], k: number): number[] {
	let maxCount: number = 0;
	const count: Map<number, number> = new Map();
	const ans: number[] = [];

	for (const num of nums) {
		const newCount: number = count.has(num)
			? <number>count.get(num) + 1
			: 1;
		count.set(num, newCount);
		if (maxCount < newCount) {
			maxCount = newCount;
		}
	}

	const buckets: number[][] = Array.from({ length: maxCount }, () => []);

	count.forEach((c, num) => {
		buckets[c - 1].push(num);
	});

	for (let i = maxCount - 1; i >= 0 && ans.length < k; i--) {
		for (const num of buckets[i]) {
			ans.push(num);
			if (ans.length === k) {
				break;
			}
		}
	}

	return ans;
}
