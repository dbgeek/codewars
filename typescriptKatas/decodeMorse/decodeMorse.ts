

const MORSE_CODE: {[index: string]:any} = {
    "....": "H",
    ".": "E",
    "-.--": "Y",
    ".---": "J",
    "..-": "U",
    "-..": "D"
}

export function decodeMorse(morseCode: string): string {
    return morseCode.trim()
           .split('   ')
           .map( word => {
             return word.split(' ')
                   .map( (c) => {
                                return MORSE_CODE[c]
                              }).join('')})
           .join(' ')
}
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));