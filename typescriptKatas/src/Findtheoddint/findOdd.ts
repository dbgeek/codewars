import { checkServerIdentity } from "tls";

export const findOdd = (xs: number[]): number => {
    return xs.reduce( (a,b) => a^b);
  };



/*export const findOdd = (xs: number[]): number => {
    let seen: Map<number, number> = new Map();
    for (let i = 0; i < xs.length; i++) {
        const key = xs[i];
        if (!seen.has(key)) {
            seen.set(key, 1);
        } else {
            const times:number = seen.get(key)!;
            seen.set(key, times + 1)
        }
    }
    for ( let key of seen.keys()){
        if (seen.get(key)! % 2 !== 0 ) {
            return key;
        }
    }
    return -1;
};*/