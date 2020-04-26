export function orderMy(words:string):string{
    const wordsArray = words.split(' ');
    let resultArray: Array<string> = [];
    resultArray.fill("",0, wordsArray.length)
    wordsArray.forEach( (word) => {
        const d = word.match(/\d+/);
        let pos: number = -1;
        if (d !== null) {
            pos = Number(d[0])
        }
        resultArray[pos-1] = word;
    })
    return resultArray.join(' ');
}

export function order(words:String):String{
    return words.split(' ')
                .sort((a,b)=> +a.match(/\d/)! -+b.match(/\d/)!)
                .join(' ')
  }