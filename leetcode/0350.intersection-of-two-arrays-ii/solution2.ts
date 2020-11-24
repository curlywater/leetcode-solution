function intersect(nums1: number[], nums2: number[]): number[] {
	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => a - b);

	const ans: number[] = [];
	let index1: number = 0;
	let index2: number = 0;
	let index: number = 0;

	while (index1 < nums1.length && index2 < nums2.length) {
		if (nums1[index1] < nums2[index2]) {
			index1++;
		} else if (nums1[index1] > nums2[index2]) {
			index2++;
		} else {
			ans[index++] = nums1[index1];
			index1++;
			index2++;
		}
	}

	return ans;
}
