function findKthLargest(nums: number[], k: number): number {
	const index: number = quickSort(0, nums.length - 1);
	return nums[index];

	function quickSort(l: number, r: number): number {
		if (l >= r) return l;

		const p: number = partition(l, r);

		if (p === k - 1) return p;
		if (p > k - 1) return quickSort(l, p - 1);
		else return quickSort(p + 1, r);
	}

	function partition(l: number, r: number): number {
		let i: number = l + 1;
		let j: number = l;

		const v: number = nums[l];

		while (i <= r) {
			if (nums[i] >= v) {
				j++;
				[nums[j], nums[i]] = [nums[i], nums[j]];
			}
			i++;
		}
		[nums[j], nums[l]] = [nums[l], nums[j]];

		return j;
	}
}
