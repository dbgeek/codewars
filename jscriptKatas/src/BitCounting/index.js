var countBits = function(n) {
    return n.toString(2).split("").reduce( (p,v) => v === "1" ? p + 1 : p + 0,0)
};

export {
    countBits
}