export function findOutlier1(integers: number[]): number {
    let oddEven = integers.reduce((prev, value) => prev += Math.abs(value) % 2, 0);
    oddEven = oddEven > 1 ? 0 : 1;
    for (let i = 0; i < integers.length; i++) {
        if (Math.abs(integers[i]) % 2 == oddEven) {
            return integers[i];
        }
    }
    return -1;
}

export function findOutlier(integers: number[]): number {
    const odds = integers.filter(v => v % 2);
    const evens = integers.filter(v => !(v % 2));

    return odds.length === 1 ? odds[0] : evens[0];
}