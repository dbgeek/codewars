export function solution(roman: string): number {
    const RomanNumber: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    return roman.split('').reduce( (sum, value,idx, array)  => RomanNumber[array[idx + 1]] > RomanNumber[value] ? sum - RomanNumber[value] : sum + RomanNumber[value], 0)
}

console.log(solution('MMVIII'), 2008);
console.log(solution('IV'), 4);
console.log(solution('IX'), 9);