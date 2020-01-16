export function getScore(arr: number[]) {
    const pointsForLines = [0, 40, 100, 300, 1200];

    return  arr.reduce((o, c) => {
        o.s += pointsForLines[c] * Math.floor(o.t / 10);
        o.t += c;
        return o
    }, {s: 0, t: 10}).s;
}

console.log(getScore([4, 2, 2, 3, 3, 4, 2]), 4900);