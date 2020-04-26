function countSmileys(arr) {
    const validEye = [':',';'];
    const validNose = ['-', '~'];
    const validMouth = [')','D'];
    return arr.reduce( (prev, item) => {
        if ( item.length  === 3) {
            if (validEye.includes(item[0]) && validNose.includes(item[1]) && validMouth.includes(item[2])) {
                return prev += 1;
            } else {
                return prev;
            }
        } else {
            if (validEye.includes(item[0]) && validMouth.includes(item[1])){
                return prev += 1;
            } else {
                return prev;
            }
        }
    }, 0)
}

export { countSmileys };