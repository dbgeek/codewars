/*export function partsSums(ls: number[]): number[] {
    let sumOfParts: number[] = []
    while ( ls.length > 0) {
        sumOfParts.push(ls.reduce( (sum, value) => {
            const r = sum + value
            return r;
        },0 ))
        ls.shift()
    }
    sumOfParts.push(0);
    return sumOfParts;
}
*/

/*
export function partsSums(ls: number[]): number[] {
    let sumOfParts: number[] = []
    sumOfParts.push(ls.reduce( (sum, value) => {
        const r = sum + value
        return r;
    },0 ));
    while ( ls.length > 0) {
        const f = ls.shift();
        const l = sumOfParts.slice(-1)[0];
        sumOfParts.push(l - f!);
    }
    return sumOfParts;
}
*/
/*
export function partsSums(ls: number[]): number[] {
    let sumOfParts: number[] = []
    sumOfParts.push(ls.reduce( (sum, value) => {
        const r = sum + value
        return r;
    },0 ));
    for (let i = 1; i < ls.length; i++) {
        sumOfParts.push(sumOfParts[i-1] - ls[i-1]);
    };
    sumOfParts.push(0);
    return sumOfParts;
}
*/
export function partsSums(ls: number[]): number[] {
    let sumOfParts: number[] = new Array<number>(ls.length + 1);
    sumOfParts[0] = (ls.reduce( (sum, value) => sum + value ,0 ));
    for (let i = 1; i < ls.length; i++) {
        sumOfParts[i] = sumOfParts[i-1] - ls[i-1];
    };
    if (ls.length > 0) {
      sumOfParts[ls.length] = (0);
    };
    return sumOfParts;
}
console.log(partsSums([0, 1, 3, 6, 10]), [20, 20, 19, 16, 10, 0]);
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])
    , [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]);