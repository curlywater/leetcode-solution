function threeSum(nums: number[]): number[][] {
	nums.sort((a, b) => a - b);
	let i: number = 0;
	let j: number = nums.length - 1;
	const ret: number[][] = [];

	while (i < j - 1 && nums[i] <= 0 && nums[j] >= 0) {
		const twoSum = nums[i] + nums[j];
		if (twoSum > 0) {
			let p = i + 1;
			while (nums[p] <= 0) {
				const sum = twoSum + nums[p];
				if (sum === 0) {
					ret.push([nums[i], nums[p], nums[j]]);
					i++;
					break;
				}
				if (sum > 0) {
					j--;
					break;
				}
				p++;
			}
		} else {
			let p = j - 1;
			while (nums[p] >= 0) {
				const sum = twoSum + nums[p];
				if (sum === 0) {
					ret.push([nums[i], nums[p], nums[j]]);
					j--;
					break;
				}
				if (sum < 0) {
					i++;
					break;
				}
				p--;
			}
		}
	}

	return ret;
}
