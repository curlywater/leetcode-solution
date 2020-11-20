/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
	const N: number = nums.length;
	let redEnd: number = -1;
	let blueStart: number = N;

	let i: number = 0;
	while (i < blueStart) {
		const num = nums[i];
		if (num === 0) {
			redEnd++;
			[nums[redEnd], nums[i]] = [nums[i], nums[redEnd]];
			i++;
		} else if (num === 2) {
			blueStart--;
			[nums[blueStart], nums[i]] = [nums[i], nums[blueStart]];
		} else {
			i++;
		}
	}
}
