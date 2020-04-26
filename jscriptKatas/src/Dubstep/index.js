function songDecoder(song){
    return song.replace(/(WUB)+/g, " ").trim();
}
export {
    songDecoder
}