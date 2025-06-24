function maximumSubarraySum(nums: number[], k: number): number {
    let currentSum = 0
    let maxSum = 0
    let set = new Set<number>()
    let left = 0
    let right = 0

    while(right < nums.length) {
        currentSum += nums[right]

        while(set.has(nums[right])){
            set.delete(nums[left])
            currentSum -= nums[left]
            left++
        }

        set.add(nums[right])

        if(right - left + 1 === k) {
            if(set.size === k) {
                maxSum = Math.max(maxSum, currentSum)
            }
            currentSum -= nums[left]
            set.delete(nums[left])
            left++
        }

        right ++
    }

    return maxSum
};