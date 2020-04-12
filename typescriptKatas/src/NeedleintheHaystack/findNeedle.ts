export function findNeedle(haystack: any[]):string {
    return haystack.reduce( ( prev, curr, idx ) =>  curr == 'needle' ? prev = `found the needle at position ${idx}`:  prev , "")
}