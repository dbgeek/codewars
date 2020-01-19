export function noSpace(x:string):string {
    return [...x].map( (i) => i === ' ' ? '' : i).join('');
}

console.log(noSpace("hello world"), "helloworld");