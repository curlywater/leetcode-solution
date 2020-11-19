function sortArrayByParityII(A: number[]): number[] {
	let even: number = 0;
	let odd: number = 1;
	const size: number = A.length;

	while (even < size) {
		if (A[even] % 2 === 1) {
			[A[even], A[odd]] = [A[odd], A[even]];
			odd += 2;
		} else {
			even += 2;
		}
	}

	return A;
}
