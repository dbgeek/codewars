export function sumOfIntervals(intervals: [number, number][]) {
    let reduectTo = reduceOverlap(intervals.sort(sortFunction));
    let c = 0;
    for (let i = 0; i<reduectTo.length; i++){
        c += Math.abs(reduectTo[i][1] - reduectTo[i][0]);
    }
    return c
}

export function reduceOverlap(array: [number, number][]):[number, number][] {
    let a:[number, number][] = [array[0]]
    for (let i = 1; i < array.length; i++){
        let overlaptest = false
        for (let j = 0; j < a.length; j++){
            if (overlap(a[j][0], a[j][1],array[i][0],array[i][1])) {
                const g = mergInterval(array[i][0],a[j][0] ,a[j][1], array[i][1])
                a[j] = [g[0], g[1]]
                overlaptest = true;
            }
        }
        if ( ! overlaptest){
            a.push([array[i][0],array[i][1]]);
        }
    }
    return a;
}

export function overlap(x1:number,x2:number,y1:number,y2:number): boolean {
    if (x2 < y1) {
        return false;
    } else if (y2 < x1) {
        return false;
    }
    return true;
}

export function mergInterval(x1:number,x2:number,y1:number,y2:number):number[] {
    return [Math.min(x1,x2), Math.max(y1,y2)]
}


function sortFunction(a:number[], b:number[]) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}