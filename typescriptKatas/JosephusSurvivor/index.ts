export function josephusSurvivor(n: number, k: number) {
    const d: number[] = [...Array(n +1).keys()];
    d.shift();
    let p = 0;
    while (d.length > 1) {
        p = (p + k-1) % d.length
        d.splice(p ,1)
    }

    return d[0]
}
console.log(josephusSurvivor(7,3), 4)
console.log(josephusSurvivor(7,300), 7)
console.log(josephusSurvivor(100,1), 100)
console.log(josephusSurvivor(300,300), 265)