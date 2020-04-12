import { exists } from "fs";

export function isIsogram(str: string):boolean{
    let chars:Set<string> = new Set();
    let result: boolean = true;
    [...str].forEach( c => {
        if (chars.has(c.toLowerCase())) {
            result = false;
        } else {
            chars.add(c.toLowerCase());
        }

    })
    return result;
}