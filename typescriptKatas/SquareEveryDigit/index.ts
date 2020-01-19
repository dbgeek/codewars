export class Kata {
    static squareDigits(num: number) {
      const c = num.toString().split('').map( val => parseInt(val) ** 2);
      return parseInt(c.join(''));
    }
  }

console.log(Kata.squareDigits(9119), 811181);