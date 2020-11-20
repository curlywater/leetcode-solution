/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let i: number = m + n - 1;
	m--;
	n--;
	while (m >= 0 || n >= 0) {
		if (m < 0) {
			nums1[i] = nums2[n--];
		} else if (n < 0) {
			nums1[i] = nums1[m--];
		} else {
			nums1[i] = nums1[m] < nums2[n] ? nums2[n--] : nums1[m--];
		}
		i--;
	}
}
