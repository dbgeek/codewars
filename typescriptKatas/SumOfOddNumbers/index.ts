export function rowSumOddNumbers(n: number) {
    let oddNumber: number[][] = []
    oddNumber.push([])
    let currentOddNr = 1;
    let currentlvl = 1;
    for ( let i = 1; i <= n; i++) {
        oddNumber.push(new Array(currentlvl).fill(0));
        oddNumber[i] = oddNumber[i].map( (i) => {
            let r = currentOddNr
            currentOddNr +=2;
            return r;
        });
        currentlvl += 1;

    }
    return oddNumber[n].reduce( (i, j) => {
        return i + j;
    },0)

}

console.log(rowSumOddNumbers(13), 2197)
console.log(13 ** 3)