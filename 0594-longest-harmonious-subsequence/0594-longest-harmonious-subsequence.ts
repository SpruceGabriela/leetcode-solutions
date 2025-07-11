function findLHS(nums: number[]): number {
    nums.sort((a, b) => a - b)
    let left = 0
    let maxLength = 0

    for(let right = 0; right < nums.length; right++) {
        if(nums[right] - nums[left] > 1) {
            left++
        } 
        if (nums[right] - nums[left] === 1) {
            maxLength = Math.max(maxLength, right - left + 1)
        }
    }

    return maxLength
};