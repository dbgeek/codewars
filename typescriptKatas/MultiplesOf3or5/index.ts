export class Challenge {
    static solution(number: number): number {
        let result = 0;
        for ( let i = 1; i < number; i++) {
            i % 3 === 0 || i % 5 === 0 ? result += i : result += 0;
        }
        return result;
    }
}

console.log(Challenge.solution(10), 23);