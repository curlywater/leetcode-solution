function searchRange(nums: number[], target: number): number[] {
	return [lowerBound(nums, target), upperBound(nums, target)];
}

function lowerBound(nums: number[], target: number) {
	let l: number = 0;
	let r: number = nums.length - 1;
	while (l <= r) {
		const mid = l + ((r - l) >> 1);
		const num = nums[mid];

		if (num >= target) {
			if (num === target && nums[mid - 1] !== target) return mid;
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}

	return -1;
}

function upperBound(nums: number[], target: number) {
	let l: number = 0;
	let r: number = nums.length - 1;
	while (l <= r) {
		const mid = l + ((r - l) >> 1);
		const num = nums[mid];

		if (num > target) {
			r = mid - 1;
		} else {
			if (num === target && nums[mid + 1] !== target) return mid;
			l = mid + 1;
		}
	}

	return -1;
}
