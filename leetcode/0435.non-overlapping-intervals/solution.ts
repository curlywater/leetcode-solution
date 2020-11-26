function eraseOverlapIntervals(intervals: number[][]): number {
	if (!intervals.length) return 0;
	intervals.sort((a, b) => a[1] - b[1]);

	let total: number = 0;
	let prev: number = intervals[0][1];

	for (let i = 1, len = intervals.length; i < len; i++) {
		if (prev > intervals[i][0]) {
			total++;
		} else {
			prev = intervals[i][1];
		}
	}

	return total;
}
