function minimumDifference(nums: number[], k: number): number {
    if(k === 1) return 0

    nums.sort((a, b) => a - b);
    let min = Infinity;
    
    for(let i = 0; i <= nums.length - k; i++){
        const diff = nums[i + k - 1] - nums[i]

        if(diff < min) {
            min = diff
        }
    }
    
    return min;
};