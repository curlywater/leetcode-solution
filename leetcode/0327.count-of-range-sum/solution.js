/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
	let sum = 0;
	const sums = [0];

	nums.forEach((num) => {
		sum += num;
		sums.push(sum);
	});

	return countRangeSumRecursive(0, sums.length - 1);

	function countRangeSumRecursive(left, right) {
		if (left === right) {
			return 0;
		}

		const mid = (right + left) >> 1;
		const n1 = countRangeSumRecursive(left, mid);
		const n2 = countRangeSumRecursive(mid + 1, right);
		let ret = n1 + n2;

		let i = left;
		let l = (r = mid + 1);

		while (i <= mid) {
			while (l <= right && sums[l] < sums[i] + lower) {
				l++;
			}

			while (r <= right && sums[r] <= sums[i] + upper) {
				r++;
			}

			ret += r - l;
			i++;
		}

		let p = left;
		let q = mid + 1;
		const sorted = [];

		while (p <= mid || q <= right) {
			if (p > mid) {
				sorted.push(sums[q++]);
			} else if (q > right) {
				sorted.push(sums[p++]);
			} else {
				if (sums[p] < sums[q]) {
					sorted.push(sums[p++]);
				} else {
					sorted.push(sums[q++]);
				}
			}
		}

		for (let i = 0, len = sorted.length; i < len; i++) {
			sums[left + i] = sorted[i];
		}

		return ret;
	}
};
