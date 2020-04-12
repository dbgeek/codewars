export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    let result:Array<number> = [a,b,c];
    if ( n <= 3) {
        return result.slice(0, n);
    }
    for (let i = 3; i < n; i++) {
        result.push(result[i -3 ] + result[i-2] +result[i-1]);
    }
    return result;
}