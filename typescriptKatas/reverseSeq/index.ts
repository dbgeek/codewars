export const reverseSeq = (n: number): number[] => {
    let r: number[] = []
    for ( let i = n; i > 0; i--) {
        r.push(i);
    }
    return r;
  };

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);