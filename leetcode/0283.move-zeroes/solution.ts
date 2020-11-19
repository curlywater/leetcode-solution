/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
	let slow: number = 0;
	let fast: number = 0;
	const size: number = nums.length;

	while (fast < size) {
		if (nums[fast] !== 0) {
			[nums[fast], nums[slow]] = [nums[slow], nums[fast]];
			slow++;
		}
		fast++;
	}

	while (slow < size) {
		nums[slow++] = 0;
	}
}
