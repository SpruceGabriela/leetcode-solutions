function checkInclusion(s1: string, s2: string): boolean {
    const window: Record<string, number> = {};
    const freqMap: Record<string, number> = {};
    let left = 0;

    for(const char of s1) {
        window[char] = (window[char] ?? 0) + 1
    }

    for(let right = 0; right < s2.length; right++) {
        if(right - left + 1 > s1.length) {
            const leftChar = s2[left]
            freqMap[leftChar]--
            if(freqMap[leftChar] == 0) {
                delete freqMap[leftChar]
            }
            left++
        } 

        const rightChar = s2[right]
        freqMap[rightChar] = (freqMap[rightChar] ?? 0) + 1

        if(right - left + 1 === s1.length) {
            if(isEqual(freqMap, window)) {
                return true
            }
        }
    }

    return false
};

function isEqual(map1: Record<string, number>, map2: Record<string, number>): boolean {
    const mapKeys1 = Object.keys(map1);
    const mapKeys2 = Object.keys(map2);

    if(mapKeys1.length !== mapKeys2.length) return false

    for(const key of mapKeys1) {
        if(map1[key] !== map2[key]) {
            return false
        }
    }

    return true
}