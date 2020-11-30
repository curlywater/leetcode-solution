function mySqrt(x: number): number {
	if (x === 0) return x;

	let l: number = 1;
	let r: number = x;
	while (l <= r) {
		const mid = l + ((r - l) >> 1);
		const sqrt = x / mid;
		if (sqrt === mid) {
			return sqrt;
		} else if (sqrt > mid) {
			l = mid + 1;
		} else {
			r = mid - 1;
		}
	}

	return r;
}
