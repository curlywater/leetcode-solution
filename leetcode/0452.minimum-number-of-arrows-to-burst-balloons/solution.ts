function findMinArrowShots(points: number[][]): number {
	const N = points.length;
	if (N <= 1) return N;

	points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

	let ans: number = 0;
	let prev: number = points[0][1];
	for (let i = 1; i < N; i++) {
		const point = points[i];
		if (prev >= point[0]) {
			prev = Math.min(point[1], prev);
		} else {
			ans++;
			prev = point[1];
		}
	}
	ans++;

	return ans;
}
