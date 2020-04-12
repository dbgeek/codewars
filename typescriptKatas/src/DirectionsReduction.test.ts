import { dirReduc } from "./DirectionsReduction"
test('test1', () => {
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toEqual(["WEST"]);
})
test('test2', () => {
    expect(dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"])).toEqual([]);
})
