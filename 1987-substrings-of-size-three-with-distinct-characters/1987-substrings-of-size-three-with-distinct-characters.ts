function countGoodSubstrings(s: string): number {
    if(s.length < 3) return 0;

    let count = 0;

    for(let i = 0; i < s.length - 2; i++) {
        const a = s[i]
        const b = s[i + 1]
        const c = s[i + 2]

        const set = new Set([a, b, c]);

        if(set.size === 3) {
            count++
        }
    }

    return count;
};