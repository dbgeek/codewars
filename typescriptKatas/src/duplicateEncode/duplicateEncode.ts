export function duplicateEncode(word: string){
    return [...word].map( v => v === 'X' ? v:  v.toLowerCase() ).map( (v,i,a) => {
        const aa = a.indexOf(v.toLowerCase());
        const bb = a.lastIndexOf(v.toLowerCase());
        if (a.indexOf(v.toLowerCase()) !== i || a.lastIndexOf(v.toLowerCase()) !== i){
            return ')'
        } else if (v === 'X') {
            return 'X'
        } else {
            return '('
        }
        return a.length
    }).join('');
}