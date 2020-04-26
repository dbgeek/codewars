function toCamelCase(str){
    if (str !== "") {
        return str.split(/[\W_]/).map( (item, idx) => idx === 0 ? item : item[0].toUpperCase() + item.substring(1)).join('');
    } else {
        return "";
    }
}

export { toCamelCase }