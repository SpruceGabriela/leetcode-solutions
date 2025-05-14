function twoSum(nums: number[], target: number): number[] {
    let dictionary = {}

    for(let i = 0; i < nums.length; i++) {
        const result = target - nums[i];

        if(nums[i] in dictionary) {
            return [dictionary[nums[i]], i]
        } else {
            dictionary[result] = i
        }
    }
};