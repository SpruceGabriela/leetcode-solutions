function containsNearbyDuplicate(nums: number[], k: number): boolean {
   let set = new Set<number>();
   let i = 0;

    for(let j = 0; j < nums.length; j++) {
        while(set.size > k) {
            set.delete(nums[i])
            i++
        }
        if(set.has(nums[j])) {
            if(Math.abs(i - j) <= k) return true
        }
        set.add(nums[j])
    }

   return false;
};