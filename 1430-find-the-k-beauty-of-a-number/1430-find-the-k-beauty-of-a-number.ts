function divisorSubstrings(num: number, k: number): number {
    const convertedNum = num.toString();
    let count = 0;

    for(let i = 0; i <= convertedNum.length - k; i++) {
        const sliced = convertedNum.slice(i, i + k)
        const result = Number(sliced)
        if(result !== 0 && num % result === 0){
            count++
        }
    }

    return count;
};