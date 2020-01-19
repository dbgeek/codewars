export function posAverage(s: string): number {
    console.log()
    const data = s.split(', ').map( (item) => item.split(''));
    let common = 0;
    let notcommon = 0;
    let cc = 0;
    for (let i = 0; i <= data.length -1; i++) {
        for (let j = i + 1; j < data.length; j++) {
            cc += 1;
            if ( i === j) {
                continue;
            }
            data[i].forEach( (v, k, b) => {
              data[i][k] === data[j][k] ? common += 1 : notcommon += 1;
            })
        }
    }

    return common/(common + notcommon) * 100
}

console.log(posAverage("6900690040, 4690606946, 9990494604"), 26.6666666667);
console.log(posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"), 26.6666666667);
console.log(posAverage("444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490"), 29.2592592593);
console.log(posAverage("449404, 099090, 600999, 694460, 996066, 906406, 644994, 699094, 064990, 696046"), 24.4444444444);
console.log(posAverage("0, 0, 1"), 33.3333333333);
