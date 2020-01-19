export function countSheeps(arrayOfSheep: boolean[]) {
    return arrayOfSheep.reduce( (i , j) => j ? i + 1: i + 0 ,0)
}

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

console.log(countSheeps(array1), 17);