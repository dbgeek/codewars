function persistence(num) {
    let counter = 0;
    while (num.toString().length > 1){
        num = num.toString().split('').reduce( (prev, value) => prev * value,1);
        counter += 1;
    }
    return counter;
 }

 export {
     persistence
 }