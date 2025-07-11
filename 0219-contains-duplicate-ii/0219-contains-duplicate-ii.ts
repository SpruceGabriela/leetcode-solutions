function containsNearbyDuplicate(nums: number[], k: number): boolean {
   let left = 0
   let right = 0
   let set = new Set<number>();

   while(right < nums.length) {
        const char = nums[right]

        while(set.has(char)) {
            if(right - left <= k) {
                return true
            }

            set.delete(nums[left])
            left++
        }
        set.add(nums[right])
        right++
   }

   return false
};
