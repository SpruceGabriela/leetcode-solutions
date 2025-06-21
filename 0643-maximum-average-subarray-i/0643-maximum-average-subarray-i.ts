function findMaxAverage(nums: number[], k: number): number {
    let currentSum = 0
    let maxSum = 0

    for(let i = 0; i < k; i++) {
        currentSum += nums[i]
    }

    maxSum = currentSum

    for(let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k] //currentSum = currentSum + new - old
        maxSum = Math.max(currentSum, maxSum)
    }

    return maxSum / k
};

