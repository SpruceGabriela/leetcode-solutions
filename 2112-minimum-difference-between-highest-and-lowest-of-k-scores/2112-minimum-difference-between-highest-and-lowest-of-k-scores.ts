function minimumDifference(nums: number[], k: number): number {
    nums.sort((a, b) => a - b)

    let min = Infinity;
    let i = 0;

    for(let j = 0; j < nums.length; j++) {
        if(j - i + 1 > k) {
            i++
        }

        if(j - i + 1 === k) {
            min = Math.min(min, (nums[j] - nums[i]))
        }

    }

    return min
};