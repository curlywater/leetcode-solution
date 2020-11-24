function sortedSquares(A: number[]): number[] {
	const N = A.length;
	let l: number = 0;
	let r: number = N - 1;
	let i: number = N - 1;
	const ans: number[] = new Array(N);

	while (l <= r) {
		const num1: number = A[l] * A[l];
		const num2: number = A[r] * A[r];

		if (num1 > num2) {
			ans[i--] = num1;
			l++;
		} else {
			ans[i--] = num2;
			r--;
		}
	}

	return ans;
}
