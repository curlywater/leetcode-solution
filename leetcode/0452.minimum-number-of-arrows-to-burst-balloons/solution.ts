function findMinArrowShots(points: number[][]): number {
	if (points.length < 1) return 0;

	points.sort((a, b) => a[1] - b[1]);
	let total: number = 0;
	let prev: number = points[0][1];

	for (let i = 1, len = points.length; i < len; i++) {
		if (prev < points[i][0]) {
			total++;
			prev = points[i][1];
		}
	}
	total++;

	return total;
}
