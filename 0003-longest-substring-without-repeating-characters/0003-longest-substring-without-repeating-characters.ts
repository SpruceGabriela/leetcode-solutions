function lengthOfLongestSubstring(s: string): number {
    const window = new Set<string>()
    let left = 0
    let right = 0
    let maxLength = 0

    while(right < s.length) {
        if(!window.has(s[right])) {
            window.add(s[right])
            maxLength = Math.max(maxLength, right - left + 1)
            right++
        } else {
            window.delete(s[left])
            left++
        }
    }

    return maxLength
};