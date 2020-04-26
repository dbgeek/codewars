var sum_pairs=function(ints, s){
    const reminders = new Map()

   for (let i = 0; i < ints.length; i++){
       const r = s - ints[i];
       if ( reminders.has(r)) {
           return [r, reminders.get(r)]
        } else {
            reminders.set(ints[i],r);
        }
   }
}
export {
    sum_pairs
}