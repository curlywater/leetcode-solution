function minSubArrayLen(s: number, nums: number[]): number {
	let start: number = 0;
	let end: number = 0;
	const n: number = nums.length;
	let sum: number = 0;
	let minLen: number = Infinity;

	while (end < n) {
		sum += nums[end];
		while (sum >= s) {
			minLen = Math.min(minLen, end - start + 1);
			sum -= nums[start++];
		}
		end++;
	}

	return minLen === Infinity ? 0 : minLen;
}
