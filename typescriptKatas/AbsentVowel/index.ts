export function absentVowel(x: string): number | undefined {
    var vowels: string = 'aeiou';
    for (let i  in [...vowels]) {
        if (x.toLowerCase().indexOf(vowels[i]) === -1 ) {
            return Number(i);
        }
    }
}

console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0)
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3)