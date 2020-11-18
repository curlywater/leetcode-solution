function insert(intervals: number[][], newInterval: number[]): number[][] {
	const result: number[][] = [];

	const N: number = intervals.length;
	let i: number = 0;
	let left: number = newInterval[0];
	let right: number = newInterval[1];
	for (; i < N; i++) {
		const interval = intervals[i];
		if (interval[0] <= right && interval[1] >= left) {
			left = Math.min(interval[0], left);
			right = Math.max(interval[1], right);
		} else {
			if (interval[0] > right) {
				break;
			} else {
				result.push(interval);
			}
		}
	}

	result.push([left, right]);
	for (; i < N; i++) {
		result.push(intervals[i]);
	}

	return result;
}
