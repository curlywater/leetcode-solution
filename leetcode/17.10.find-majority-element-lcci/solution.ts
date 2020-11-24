function majorityElement(nums: number[]): number {
	let count: number = 0;
	let ans: number = -1;

	nums.forEach((num) => {
		if (count === 0) {
			ans = num;
		}

		if (ans === num) {
			count++;
		} else {
			count--;
		}
	});

	if (count > 0) {
		ans =
			nums.filter((num) => num === ans).length > nums.length / 2
				? ans
				: -1;
	} else {
		ans = -1;
	}

	return ans;
}
