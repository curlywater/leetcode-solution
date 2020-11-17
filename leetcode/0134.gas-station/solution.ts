function canCompleteCircuit(gas: number[], cost: number[]): number {
  let startIndex: number = -1;
  let prefixCost: number = 0;
  let currentGas: number = 0;

  for (let i = 0, len = gas.length; i < len; i++) {
    currentGas += gas[i] - cost[i];

    if (currentGas < 0) {
      prefixCost -= currentGas;
      currentGas = 0;
      startIndex = -1;
    } else if (startIndex === -1) {
      startIndex = i;
    }
  }

  return currentGas - prefixCost >= 0 ? startIndex : -1;
}
