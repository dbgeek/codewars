export function isValidWalk(walk: string[]): boolean {
    let x = 0;
    let y = 0;
    if (walk.length !== 10) {
        return false
    }
    walk.forEach( (item) => {
        switch (item) {
            case 'n': {
                y += 1;
                break;
            }
            case 's': {
                y -= 1;
                break;
            }
            case 'e': {
                x += 1;
                break;
            }
            case 'w': {
                x -= 1;
                break;
            }
        }
    })
    if ( x === 0 && y === 0) {
        return true;
    }
    return false;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), true);
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), false);