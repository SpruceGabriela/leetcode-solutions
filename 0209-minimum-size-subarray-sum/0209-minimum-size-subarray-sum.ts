function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let sum = 0;
    let minimalLength = Infinity; //can't be zero because of the Math.min calculation

    for(let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while(sum >= target) {
            minimalLength = Math.min(minimalLength, right - left + 1) //minimalLength vs the current length up to right
            sum -= nums[left];
            left++
        }
    }

    return minimalLength === Infinity ? 0 : minimalLength
};