export function humanReadable(seconds:number) {
    const hour = Math.floor(seconds/3600).toString().padStart(2,'0');
    seconds = seconds % 3600;
    const minutes = Math.floor(seconds/60).toString().padStart(2,'0');
    seconds = seconds % 60;
    const sec = seconds.toString().padStart(2,'0');
    return `${hour}:${minutes}:${sec}`;
}