function alphabetPosition(text) {
    return text.split("").
        filter( element => /[a-z]/i.test(element)).
        map( item => item.toLowerCase().charCodeAt() - 96).
        join(" ");
}

export {
    alphabetPosition
}