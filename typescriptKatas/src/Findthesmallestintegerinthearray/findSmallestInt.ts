export function findSmallestInt(args: number[]): number {
    return args.reduce( (a, b) => b < a ? a = b: a , Number.MAX_VALUE);
}