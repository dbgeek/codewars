export const dirReduc = (directionsArray: string[]): string[] => {
    for (let i = 0; i < directionsArray.length; i++) {
        const opositsValue = OPPOSITS[directionsArray[i]];
        if (opositsValue === directionsArray[i + 1]) {
            directionsArray.splice(i, 2)
            i = -1;
        }
    }
    return directionsArray;
}

const OPPOSITS = {
    "NORTH": "SOUTH",
    "WEST": "EAST",
    "EAST": "WEST",
    "SOUTH": "NORTH"
} as Record<string, string> 