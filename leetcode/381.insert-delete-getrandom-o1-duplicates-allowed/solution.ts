class RandomizedCollection {
	dict: Map<number, Set<number>> = new Map();
	nums: number[] = [];

	insert(val: number): boolean {
		this.nums.push(val);
		const set: Set<number> = this.dict.has(val)
			? <Set<number>>this.dict.get(val)
			: new Set();
		set.add(this.nums.length - 1);
		this.dict.set(val, set);
		return set.size === 1;
	}

	remove(val: number): boolean {
		if (!this.dict.has(val)) {
			return false;
		}

		const valSet = <Set<number>>this.dict.get(val);
		let idx: number = -1;
		for (const i of valSet) {
			idx = i;
			break;
		}

		const last = this.nums.length - 1;
		const lastVal = this.nums[last];
		const lastValSet = <Set<number>>this.dict.get(lastVal);

		this.nums[idx] = lastVal;
		this.nums.pop();

		valSet.delete(idx);
		lastValSet.add(idx);
		lastValSet.delete(last);
		if (valSet.size === 0) {
			this.dict.delete(val);
		}
		return true;
	}

	getRandom(): number {
		return this.nums[Math.floor(Math.random() * this.nums.length)];
	}
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
