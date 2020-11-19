function kClosest(points: number[][], K: number): number[][] {
	quickSort(0, points.length - 1);
	return points.slice(0, K);

	function distance([x, y]: number[] = []): number {
		return x * x + y * y;
	}

	function quickSort(l: number, r: number): number {
		if (l >= r) return l;

		const p = partition(l, r);
		if (p === K) return p;
		if (p > K) return quickSort(l, p - 1);
		else return quickSort(p + 1, r);
	}

	function partition(l: number, r: number): number {
		let i: number = l + 1;
		let j: number = l;

		const v = distance(points[l]);
		while (i <= r) {
			if (distance(points[i]) <= v) {
				j++;
				[points[i], points[j]] = [points[j], points[i]];
			}
			i++;
		}
		[points[l], points[j]] = [points[j], points[l]];
		return j;
	}
}
