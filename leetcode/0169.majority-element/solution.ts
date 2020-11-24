function majorityElement(nums: number[]): number {
	let ans: number = 0;
	let count: number = 0;
	nums.forEach((num) => {
		if (count === 0) {
			ans = num;
		}

		if (ans !== num) {
			count--;
		} else {
			count++;
		}
	});

	return ans;
}
