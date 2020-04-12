export function number(busStops: [number, number][]): number {
    return busStops.reduce( (a, v) => a+= v[0] - v[1],0)
}