class RandomizedSet {
	values: number[] = [];
	dict: Map<number, number> = new Map();

	insert(val: number): boolean {
		if (this.dict.has(val)) {
			return false;
		}
		this.values.push(val);
		this.dict.set(val, this.values.length - 1);
		return true;
	}

	remove(val: number): boolean {
		if (!this.dict.has(val)) return false;

		const idx: number = <number>this.dict.get(val);
		const last: number = this.values.length - 1;
		const lastValue = this.values[last];
		[this.values[idx], this.values[last]] = [
			this.values[last],
			this.values[idx],
		];
		this.dict.set(lastValue, idx);
		this.values.pop();
		this.dict.delete(val);
		return true;
	}

	getRandom(): number {
		return this.values[Math.floor(Math.random() * this.values.length)];
	}
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
