function findAnagrams(s: string, p: string): number[] {
    const windowMap: Record<string, number> = {}
    const freqMap: Record<string, number> = {}
    let arr: number[] = []
    let left = 0

    for(const char of p) {
        windowMap[char] = (windowMap[char] ?? 0) + 1 //{a:1, b:1, c:1} window that you need to compare
    }

    for(let right = 0; right < s.length; right++) {
        const rightChar = s[right]
        freqMap[rightChar] = (freqMap[rightChar] ?? 0) + 1

        if(right - left + 1 > p.length) { //if bigger, don't compare, if not, go to next if
            const leftChar = s[left]
            freqMap[leftChar]--; //decrease

            if(freqMap[leftChar] === 0) {
                delete freqMap[leftChar] //only removes when it's empty
            }

            left++
        }

        if(right - left + 1 === p.length) { //only check if it's equal once the window has the correct size
            if(isEqual(windowMap, freqMap)) {
                arr.push(left)
            }
        }
    }

    return arr
};

function isEqual(map1: Record<string, number>, map2: Record<string, number>): boolean {
    const map1Keys = Object.keys(map1);
    const map2keys = Object.keys(map2);

    if(map1Keys.length !== map2keys.length) return false;

    for(const key of map1Keys) {
        if(map1[key] !== map2[key]) {
            return false;
        }
    }

    return true;
}
