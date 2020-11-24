function intersect(nums1: number[], nums2: number[]): number[] {
	if (nums1.length > nums2.length) {
		return intersect(nums2, nums1);
	}
	const ans: number[] = [];
	const map: {
		[key: string]: number;
	} = {};

	for (const num of nums1) {
		map[num] = (map[num] || 0) + 1;
	}

	for (const num of nums2) {
		if (map[num]) {
			map[num]--;
			ans.push(num);
		}
	}

	return ans;
}
