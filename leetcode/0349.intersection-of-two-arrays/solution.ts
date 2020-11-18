function intersection(nums1: number[], nums2: number[]): number[] {
	const nums1Set = new Set(nums1);
	const nums2Set = new Set(nums2);

	if (nums1Set.size > nums2Set.size) {
		return _intersection(nums2Set, nums1Set);
	} else {
		return _intersection(nums1Set, nums2Set);
	}

	function _intersection(set1: Set<number>, set2: Set<number>) {
		const result: number[] = [];
		for (const num of set1) {
			if (set2.has(num)) {
				result.push(num);
			}
		}
		return result;
	}
}
