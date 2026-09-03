export default function log(message){
    console.log("[LOG]) " + message);
}

export function logBetter(message) {
    console.log("-------------------");
    console.log("[Log] " + message);
    console.log("-----------------");
}