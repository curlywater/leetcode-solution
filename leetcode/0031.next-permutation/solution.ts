/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
	const size: number = nums.length;

	let prev: number = -1;
	for (let i = size - 1; i >= 0; i--) {
		if (nums[i + 1] > nums[i]) {
			prev = i;
			break;
		}
	}

	if (prev !== -1) {
		let next: number = prev;
		while (next < size - 1) {
			if (nums[prev] >= nums[next + 1]) {
				break;
			}
			next++;
		}
		[nums[prev], nums[next]] = [nums[next], nums[prev]];
	}

	let left: number = prev + 1;
	let right: number = size - 1;

	while (left < right) {
		[nums[left], nums[right]] = [nums[right], nums[left]];
		left++;
		right--;
	}
}
